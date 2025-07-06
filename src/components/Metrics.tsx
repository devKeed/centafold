import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const metricsData = [
  { label: "years of experience", value: 20, suffix: "+" },
  { label: "seasoned consultants", value: 10, suffix: "+" },
  { label: "happy clients", value: 100, suffix: "%" },
  { label: "industry partners", value: 10, suffix: "+" },
];

const Metrics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-background-metrics py-6 px-2 sm:px-3 lg:px-4">
      <div
        ref={ref}
        style={{ maxWidth: "1000px", margin: "auto" }}
        className="flex flex-wrap justify-around items-center gap-4"
      >
        {metricsData.map((metric, index) => (
          <div key={index} className="p-4 text-center">
            {inView && (
              <CountUp
                end={metric.value}
                suffix={metric.suffix}
                duration={4}
                className="text-4xl font-bold text-white"
              />
            )}
            {!inView && (
              <span className="text-4xl font-bold text-white">
                0{metric.suffix}
              </span>
            )}
            <p className="text-white text-lg mt-2">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
