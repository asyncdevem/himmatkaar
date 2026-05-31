import Link from "next/link";
import { Clock3, Rocket, ShieldCheck } from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-off-white)]">
      <div className="w-full max-w-3xl px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-courage-green)]/10 text-[var(--color-courage-green)] text-sm font-bold mb-6 font-body">
            <Clock3 size={16} />
            Coming Soon
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-deep-navy)] mb-4 font-heading">
            Signup For Student And Coordinator Roles Will Be Added Soon
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 font-body">
            We are currently supporting admin access only. Public signup is in progress and will be launched in a future update.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-courage-green)] font-bold font-body">
                <ShieldCheck size={18} />
                Current Access
              </div>
              <p className="text-sm text-slate-600 font-body">Admin login is active and available now.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-courage-green)] font-bold font-body">
                <Rocket size={18} />
                Next Release
              </div>
              <p className="text-sm text-slate-600 font-body">Student and coordinator signup flows.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-[var(--color-courage-green)] text-white font-bold rounded-xl hover:brightness-110 transition-all font-body"
            >
              Go To Admin Login
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all font-body"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


