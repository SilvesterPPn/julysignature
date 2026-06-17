interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-rose-500 font-medium mb-2 tracking-widest uppercase text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-stone-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
