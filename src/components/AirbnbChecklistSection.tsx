import { useTranslation } from "react-i18next";

type AirbnbChecklistSectionProps = {
  title?: string;
  intro?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

type SectionKey =
  | "kitchen"
  | "bathrooms"
  | "bedrooms"
  | "livingRoom"
  | "laundryRoom"
  | "exterior"
  | "other"
  | "extraServices";

const SECTION_CONFIG: Array<{
  key: SectionKey;
  icon: string;
  hasSubSections?: boolean;
}> = [
  { key: "kitchen", icon: "🍳" },
  { key: "bathrooms", icon: "🚿" },
  { key: "bedrooms", icon: "🛏️" },
  { key: "livingRoom", icon: "🛋️" },
  { key: "laundryRoom", icon: "🧺" },
  { key: "exterior", icon: "🏠" },
  { key: "other", icon: "✨" },
  { key: "extraServices", icon: "🕒", hasSubSections: true }
];

export function AirbnbChecklistSection({
  title,
  intro,
  sectionClassName,
  containerClassName
}: AirbnbChecklistSectionProps) {
  const { t } = useTranslation();

  const resolvedTitle = title ?? t("checklists.airbnb.title");
  const resolvedIntro = intro ?? t("checklists.airbnb.intro");
  const notesTitle = t("checklists.airbnb.notesTitle");
  const notes = t("checklists.airbnb.notes", { returnObjects: true }) as string[];

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
            {SECTION_CONFIG.map(({ key, icon, hasSubSections }) => {
              const sectionTitle = t(`checklists.airbnb.sections.${key}.title`);
              const sectionItems = hasSubSections
                ? []
                : (t(`checklists.airbnb.sections.${key}.items`, {
                    returnObjects: true
                  }) as string[]);
              const sectionSubSections = hasSubSections
                ? (t(`checklists.airbnb.sections.${key}.subSections`, {
                    returnObjects: true
                  }) as Array<{ title: string; items: string[] }> )
                : [];

              return (
                <article key={key} className="checklist-card h-full">
                  <header className="flex items-center gap-3 mb-6">
                    <span className="text-3xl" aria-hidden="true">{icon}</span>
                    <h3 className="text-2xl font-semibold tracking-tight">{sectionTitle}</h3>
                  </header>

                  {sectionItems.length > 0 && (
                    <ul className="checklist-list space-y-3">
                      {sectionItems.map((item, index) => (
                        <li key={index} className="checklist-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {sectionSubSections.map((subSection, subIndex) => (
                    <div key={subIndex} className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">{subSection.title}</h4>
                      <ul className="checklist-list space-y-3">
                        {subSection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="checklist-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              );
            })}

            <div className="md:col-span-2 text-center space-y-2">
              <h3 className="text-xl font-semibold">{notesTitle}</h3>
              {notes.map((note, index) => (
                <p key={index} className="font-semibold">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AirbnbChecklistSection;

