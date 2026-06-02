// @ts-ignore: SVG module declarations may be absent in this repo
import heroImage from "../assets/hero.svg";
import {
  FiCode,
  FiFileText,
  FiBox,
  FiArrowRight,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import RecentProjects from "../components/RecentProjects";

const dashboardCards = [
  {
    title: "Generate POC",
    description: "Create a proof-of-concept starter kit in seconds.",
    icon: FiCode,
  },
  {
    title: "Create Playbook",
    description: "Build technical playbooks and enablement guides.",
    icon: FiFileText,
  },
  {
    title: "Browse CI/CD Templates",
    description: "Explore and use reusable CI/CD templates.",
    icon: FiBox,
  },
];

const infoCards = [
  {
    stat: "12",
    title: "POCs Created",
    icon: FiCode,
    growth: "20%",
    growthline: "vs last 7 days",
    style: "text-green-600 bg-green-100 ",
  },
  {
    stat: "8",
    title: "Playbooks Created",
    icon: FiFileText,
    growth: "15%",
    growthline: "vs last 7 days",
    style: "text-orange-600 bg-orange-100 ",
  },
  {
    stat: "24 hrs",
    title: "Time Saved",
    icon: FiClock,
    growth: "10%",
    growthline: "vs last 7 days",
    style: "text-blue-600 bg-blue-100 ",
  },
  {
    stat: "5",
    title: "Templates Copied",
    icon: FiUsers,
    growth: "20%",
    growthline: "vs last 7 days",
    style: "text-pink-600 bg-pink-100 ",
  },
];

function Dashboard() {
  return (
    <section className="space-y-3">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-violet-100 bg-violet-50 px-4  shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start ">
            <h2 className="text-2xl font-bold text-slate-900">
              Welcome back, Developer! 👋
            </h2>

            <p className=" max-w-xl text-sm leading-7 text-slate-600">
              Build faster with reusable POCs, technical playbooks, and
              production-ready templates.
            </p>
          </div>

          <img
            src={heroImage}
            alt="Developer tools illustration"
            className="hidden w-36 lg:block"
          />
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {dashboardCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className=" right-0 flex items-end  justify-between ">
                <div className="flex items-center gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Icon className="text-2xl " />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-950">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>

                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600 transition hover:bg-violet-100">
                  <FiArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Cards */}
      <div className="mt-5 grid gap-6 md:grid-cols-4">
        {infoCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-violet-100/20 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl  ${card.style} `}
                >
                  <Icon className="text-2xl" />
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-jet-black">
                    {card.stat}
                  </h3>

                  <p className="mt-1 text-sm text-bold-blue">{card.title}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-left">
                <span className="text-sm font-semibold text-green-600">
                  +{card.growth}
                </span>

                <span className="text-sm text-slate-500">
                  {card.growthline}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/*Recent Projects */}
      <RecentProjects />
    </section>
  );
}

export default Dashboard;
