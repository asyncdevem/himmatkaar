-- Create events table in Supabase
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time VARCHAR(50),
  location VARCHAR(255),
  type VARCHAR(100),
  capacity INTEGER DEFAULT 0,
  registered INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'past', 'cancelled')),
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on date for faster queries
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);

-- Enable Row Level Security (RLS)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON events
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert" ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON events
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete" ON events
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample events
INSERT INTO events (title, description, date, time, location, type, capacity, registered, status, image) VALUES
('Youth Leadership Summit', 'Annual leadership conference bringing together youth leaders from across Faisalabad', '2026-03-25', '09:00 AM', 'Faisalabad Convention Center', 'Summit', 500, 0, 'upcoming', '/event-leadership.jpg'),
('Innovation Workshop', 'Hands-on workshop covering essential digital literacy and innovation skills', '2026-04-10', '02:00 PM', 'NIC Faisalabad', 'Workshop', 100, 0, 'upcoming', '/event-workshop.jpg'),
('Community Open House', 'Join us for a day of networking and exploring opportunities at Himmatkaar', '2026-04-20', '10:00 AM', 'Himmatkaar Office', 'Open House', 200, 0, 'upcoming', '/event-openhouse.jpg');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to call the function
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
