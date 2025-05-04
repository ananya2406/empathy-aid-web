
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
}

const StatsCard = ({ title, value, icon, className }: StatsCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-md p-6 flex items-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in border border-relief-cream/50", 
      className
    )}>
      <div className="bg-relief-primary/10 p-3 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-relief-accent">{title}</h3>
        <p className="text-2xl font-bold text-relief-gray">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
