import { DashboardStats } from "../types";

interface StatsCardProps {
  stats: DashboardStats;
}

export function StatsCard({ stats }: StatsCardProps) {
  const getTrendColor = (trend: DashboardStats["trend"]) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendSymbol = (trend: DashboardStats["trend"]) => {
    switch (trend) {
      case "up":
        return "+";
      case "down":
        return "-";
      default:
        return "";
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{stats.title}</h3>
      </div>
      <div className="text-2xl font-bold">{stats.value}</div>
      <p className={`text-xs ${getTrendColor(stats.trend)}`}>
        {getTrendSymbol(stats.trend)}
        {stats.change}
      </p>
    </div>
  );
}
