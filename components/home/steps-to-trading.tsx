import Link from "next/link";
import {
  UserPlus2,
  ShieldCheck,
  CandlestickChart,
  BadgeCent,
} from "lucide-react";

type Props = {};

const steps = [
  {
    id: 1,
    icon: <UserPlus2 size={60} strokeWidth={0.5} />,
    header: "Register",
    body: "Sign up with AdroFx for free and instantly to gain access to the world's trading market. Register",
  },
  {
    id: 2,
    icon: <ShieldCheck size={60} strokeWidth={0.5} />,
    header: "Verify",
    body: "Email and Phone verification for security of your account and send us your proof of ID and residence.",
  },
  {
    id: 3,
    icon: <CandlestickChart size={60} strokeWidth={0.5} />,
    header: "Fund",
    body: "Make a deposit via any funding method from our list that sutures you the most.",
  },
  {
    id: 4,
    icon: <BadgeCent size={60} strokeWidth={0.5} />,
    header: "Trade",
    body: "Open and close trades on your own or simply Copy Trade other traders. other traders.",
  },
];

const StepsToTrading = (props: Props) => {
  return (
    <section className="bg-sky-50/50 font-body">
      {/* container & flex Wrapper*/}
      <div className="w-[80%] mx-auto p-3">
        {/* header */}
        <h4 className="font-semibold text-3xl  capitalize font-bodyTwo">
          Start Trading in <span className="text-blue-600">4 steps</span>
        </h4>
        {/* flex container */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 mb-5">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-3 rounded">
              <div className="my-3">{step.icon}</div>
              <div className="space-y-3">
                <h4 className="text-lg">{step.header}</h4>
                <p className="font-light font-db leading-loose">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* open account */}
        <div>
          <Link
            href="/get-started"
            className="rounded bg-teal-300 px-6 py-3 w-fit block text-white"
          >
            Create Account Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StepsToTrading;
