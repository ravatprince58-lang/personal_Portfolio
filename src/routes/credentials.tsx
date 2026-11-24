
import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FileBadge,
  FileText,
  GraduationCap,
  Image as ImageIcon,
} from "lucide-react";
import { PaperCard, MarginNote, SectionTitle, Tag } from "@/components/paper";
import { StarDoodle } from "@/components/doodles";

const FRONTEND_RESUME = "/documents/Frontend_Resume.pdf";
const GAME_RESUME = "/documents/Game_Development_Resume.pdf";

const resumes = [
  {
    title: "Frontend Developer",
    description:
      "HTML, CSS, JavaScript, React.js, Tailwind CSS and frontend projects.",
    file: FRONTEND_RESUME,
  },
  {
    title: "Unity Game Developer",
    description:
      "Unity, C#, 2D game development and gameplay projects.",
    file: GAME_RESUME,
  },
];

const credentials = [
  {
    category: "Internship",
    year: "2026",
    title: "Frontend Development Internship",
    organization: "3Skills",
    description:
      "Completed a 2-month remote frontend development internship from September 5 to November 5, 2026. Completed four projects and presented the work to the mentor and fellow interns.",
    file: "/certificates/3skills-internship.pdf",
    preview: "/public/image/3skills-certificate.png",
  },
  {
    category: "Hackathon",
    year: "2026",
    title: "3rd Rank — Hackathon 2026",
    organization: "Hackathon 2026",
    description:
      "Secured 3rd rank for team-based project development and problem-solving.",
    file: "/certificates/hackathon-2026.pdf",
    preview: "/public/image/2026-hackathon.png",
  },
  {
    category: "Hackathon",
    year: "2025",
    title: "3rd Rank — Hackathon 2025",
    organization: "Hackathon 2025",
    description:
      "Secured 3rd rank while collaborating with a team to develop a project.",
    file: "/certificates/hackathon-2025-3.pdf",
    preview: "/public/image/2025-3-hackathon.png",
  },
  {
    category: "Project Recognition",
    year: "2025",
    title: "SoulCare — Project Recognition",
    organization: "SoulCare",
    description:
      "Project recognition, including a trophy and certificates for the project and its presentation.",
    file: "/certificates/hackathon-2025.pdf",
    preview: "/public/image/hackathon-2025.png",
  },
];

export const Route = createFileRoute("/credentials")({
  head: () => ({
    meta: [
      { title: "Resume & Credentials — Ravat Prince" },
      {
        name: "description",
        content:
          "View Ravat Prince's resumes, internship certificate, hackathon achievements, project recognition and course certificates.",
      },
      {
        property: "og:title",
        content: "Resume & Credentials — Ravat Prince",
      },
      {
        property: "og:description",
        content:
          "Resumes, certificates and professional achievements of Ravat Prince.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CredentialsPage,
});

function CredentialsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-20 pt-10 md:pt-14">
      <header className="relative">
        <p className="font-hand text-2xl text-primary">
          proof of work & milestones
        </p>

        <SectionTitle>Resume &amp; credentials</SectionTitle>

        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          A collection of my professional experience, achievements, project
          recognition and learning milestones.
        </p>

        <MarginNote className="mt-4 text-xl">
          a few pages from my professional journey
        </MarginNote>
      </header>

      {/* RESUMES */}
      <section className="mt-12" aria-labelledby="resume-heading">
        <div className="mb-5 flex items-center gap-3">
          <span className="sketch-border flex h-11 w-11 items-center justify-center bg-card text-primary">
            <FileText className="h-5 w-5" aria-hidden />
          </span>

          <div>
            <h2
              id="resume-heading"
              className="font-display text-2xl uppercase tracking-wide md:text-3xl"
            >
              My resumes
            </h2>

            <p className="text-sm text-muted-foreground">
              Choose the resume that matches your professional interests.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {resumes.map((resume) => (
            <PaperCard key={resume.title} tape>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="sketch-border-alt flex h-20 w-16 shrink-0 items-center justify-center bg-background text-primary">
                  <FileBadge
                    className="h-9 w-9"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl uppercase tracking-wide">
                      {resume.title}
                    </h3>
                    <Tag>PDF resume</Tag>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {resume.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={resume.file}
                      target="_blank"
                      rel="noreferrer"
                      className="sketch-border-alt inline-flex items-center gap-2 bg-background px-4 py-2 font-display text-sm uppercase tracking-widest transition-colors hover:bg-secondary"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      View
                    </a>

                    <a
                      href={resume.file}
                      download
                      className="sketch-border inline-flex items-center gap-2 bg-primary px-4 py-2 font-display text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Download className="h-4 w-4" aria-hidden />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </PaperCard>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="mt-14" aria-labelledby="certificates-heading">
        <div className="mb-2 flex items-center gap-3">
          <span className="sketch-border flex h-11 w-11 items-center justify-center bg-card text-primary">
            <Award className="h-5 w-5" aria-hidden />
          </span>

          <div>
            <h2
              id="certificates-heading"
              className="font-display text-2xl uppercase tracking-wide md:text-3xl"
            >
              Certificates &amp; recognition
            </h2>

            <p className="text-sm text-muted-foreground">
              Internship, hackathons, projects and learning.
            </p>
          </div>
        </div>

        <MarginNote className="mb-7 text-lg">
          each one marks a step forward
        </MarginNote>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item, index) => (
            <PaperCard
              key={`${item.title}-${index}`}
              tilt={index % 2 === 0 ? -0.35 : 0.35}
              className="h-full"
              innerClassName="flex h-full flex-col"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-primary">
                  {item.category === "Internship" ? (
                    <BriefcaseBusiness
                      className="h-4 w-4"
                      aria-hidden
                    />
                  ) : item.category === "Course" ? (
                    <GraduationCap
                      className="h-4 w-4"
                      aria-hidden
                    />
                  ) : (
                    <StarDoodle className="h-4 w-4" aria-hidden />
                  )}

                  <span className="font-display text-xs uppercase tracking-widest">
                    {item.category}
                  </span>
                </span>

                {item.year && (
                  <span className="font-display text-sm tracking-widest text-pencil">
                    {item.year}
                  </span>
                )}
              </div>

              {item.preview ? (
                <a
                  href={item.file || item.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="sketch-border-alt mt-5 block aspect-[1.55/1] w-full overflow-hidden bg-background"
                  aria-label={`Open ${item.title}`}
                >
                  <img
                    src={item.preview}
                    alt={`${item.title} certificate preview`}
                    className="block h-full w-full object-cover p-0"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="sketch-border-alt mt-5 flex h-40 flex-col items-center justify-center gap-2 bg-background text-pencil">
                  <ImageIcon className="h-8 w-8 opacity-70" aria-hidden />
                  <span className="font-hand text-lg">
                    certificate preview
                  </span>
                  <span className="text-xs">
                    add your real file path
                  </span>
                </div>
              )}

              <h3 className="mt-4 font-display text-xl uppercase leading-tight tracking-wide">
                {item.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-primary">
                {item.organization}
              </p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 border-t border-primary/20 pt-4">
                {item.file ? (
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-primary transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      View certificate
                    </a>

                    <a
                      href={item.file}
                      download
                      className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-foreground/70 transition-colors hover:text-primary"
                    >
                      <Download className="h-4 w-4" aria-hidden />
                      Download
                    </a>
                  </div>
                ) : (
                  <p className="text-xs italic text-pencil">
                    Certificate file not added yet.
                  </p>
                )}
              </div>
            </PaperCard>
          ))}
        </div>
      </section>

      {/* FOOTER NOTE */}
      <PaperCard variant="alt" className="mt-14" tilt={-0.25}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <StarDoodle className="h-6 w-6 shrink-0 text-primary" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            These credentials complement the projects and skills shown
            throughout this portfolio. Certificate previews and downloads will
            appear once the original files are added.
          </p>
        </div>
      </PaperCard>
    </main>
  );
}
