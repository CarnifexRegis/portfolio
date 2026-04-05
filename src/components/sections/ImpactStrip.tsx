import { Card } from '../common/Card';

const impactMetrics = [
  {
    value: "90%",
    label: "Crash Reduction",
    description: "By leading the migration from native apps to WebView-based architecture."
  },
  {
    value: "Millions",
    label: "Of Users Served",
    description: "Shipping features and fixes daily at CHECK24."
  },
  {
    value: "100%",
    label: "End-to-End Ownership",
    description: "Architectural and release responsibility across frontend, backend, and deployment."
  }
];

export const ImpactStrip = () => {
  return (
    <section className="py-12 bg-surface border-y border-border px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactMetrics.map((metric, idx) => (
            <Card key={idx} hover={false} className="border-none shadow-none bg-transparent p-0 md:p-4 border-l-2 md:border-l-0 md:border-t-2 border-primary/20 rounded-none md:rounded-t-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-text mb-2">
                {metric.label}
              </div>
              <div className="text-text-secondary text-sm leading-relaxed">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
