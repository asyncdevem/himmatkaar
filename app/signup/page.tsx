import Link from "next/link";
import { Clock3, Rocket, ShieldCheck } from "lucide-react";

export default function SignUp() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl px-6">
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold mb-6">
            <Clock3 size={16} />
            Coming Soon
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Signup For Student And Coordinator Roles Will Be Added Soon
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
            We are currently supporting admin access only. Public signup is in progress and will be launched in a future update.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 p-4">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-primary)] font-bold">
                <ShieldCheck size={18} />
                Current Access
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Admin login is active and available now.</p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 p-4">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-primary)] font-bold">
                <Rocket size={18} />
                Next Release
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Student and coordinator signup flows.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:brightness-110 transition-all"
            >
              Go To Admin Login
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
