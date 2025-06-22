"use client";

const logos = [
  "/logo/react.svg",
  "/logo/redux.svg",
  "/logo/next.svg",
  "/logo/tailwindcss.svg",
  "/logo/threejs.svg",
  "/logo/node.svg",
  "/logo/express.svg",
  "/logo/flask.svg",
  "/logo/fastapi.svg",
  "/logo/socketio.svg",
  "/logo/mysql.svg",
  "/logo/mongodb.svg",
  "/logo/postgresql.svg",
  "/logo/docker.svg",
  "/logo/linux.svg",
  "/logo/git.svg",
  "/logo/bash.svg",
  "/logo/nginx.svg",
  "/logo/azure.svg",
  "/logo/firebase.svg",
  "/logo/pandas.svg",
  "/logo/ansible.svg",
];

export default function SkillsGrid() {
  return (
    <>
      <div className="px-2 flex flex-wrap gap-x-[13px] gap-y-5 md:gap-5">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={logo.split("/")[2].split(".")[0]}
            className="h-10"
          />
        ))}
      </div>
    </>
  );
}
