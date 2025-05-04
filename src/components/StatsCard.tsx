
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
}

const StatsCard = ({ title, value, icon, className }: StatsCardProps) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-md p-6 flex items-center", className)}>
      <div className="bg-relief-blue/10 p-3 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
