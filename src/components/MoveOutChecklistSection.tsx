import { useTranslation } from "react-i18next";

type MoveOutChecklistSectionProps = {
  title?: string;
  intro?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

type SectionKey =
  | "kitchen"
  | "bathrooms"
  | "livingAreas"
  | "deepCleaning"
  | "closets";

const SECTION_CONFIG: Array<{
  key: SectionKey;
  icon: string;
}> = [
  { key: "kitchen", icon: "🍽️" },
  { key: "bathrooms", icon: "🚽" },
  { key: "livingAreas", icon: "🛋️" },
  { key: "deepCleaning", icon: "✨" },
  { key: "closets", icon: "🚪" }
];

export function MoveOutChecklistSection({
  title,
  intro,
  sectionClassName,
  containerClassName
}: MoveOutChecklistSectionProps) {
  const { t } = useTranslation();

  const resolvedTitle = title ?? t("checklists.moveOut.title");
  const resolvedIntro = intro ?? t("checklists.moveOut.intro");
  const notIncludedTitle = t("checklists.moveOut.notIncludedTitle");
  const notIncludedIntro = t("checklists.moveOut.notIncludedIntro");
  const notIncludedItems = t("checklists.moveOut.notIncludedItems", { returnObjects: true }) as string[];
  const note = t("checklists.moveOut.note");

  const wrapperClasses = ["py-16 bg-background", sectionClassName].filter(Boolean).join(" ");
  const containerClasses = ["container mx-auto px-4", containerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={wrapperClasses}>
      <div className={containerClasses}>
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{resolvedTitle}</h2>
            <p className="text-lg text-muted-foreground">{resolvedIntro}</p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {SECTION_CONFIG.map(({ key, icon }) => {
              const sectionTitle = t(`checklists.moveOut.sections.${key}.title`);
              const sectionItems = t(`checklists.moveOut.sections.${key}.items`, {
                returnObjects: true
              }) as string[];

              return (
                <article key={key} className="checklist-card h-full">
                  <header className="flex items-center gap-3 mb-6">
                    <span className="text-3xl" aria-hidden="true">{icon}</span>
                    <h3 className="text-2xl font-semibold tracking-tight">{sectionTitle}</h3>
                  </header>

                  <ul className="checklist-list space-y-3">
                    {sectionItems.map((item, index) => (
                      <li key={index} className="checklist-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            {/* NOT INCLUDED Section */}
            <article className="checklist-card h-full md:col-span-2 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900">
              <header className="flex items-center gap-3 mb-6">
                <span className="text-3xl" aria-hidden="true">❌</span>
                <h3 className="text-2xl font-semibold tracking-tight text-red-900 dark:text-red-100">{notIncludedTitle}</h3>
              </header>
              <p className="text-sm text-red-800 dark:text-red-200 mb-4 font-semibold">{notIncludedIntro}</p>
              <ul className="checklist-list space-y-3">
                {notIncludedItems.map((item, index) => (
                  <li key={index} className="checklist-item text-red-900 dark:text-red-100">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm italic text-muted-foreground">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoveOutChecklistSection;

