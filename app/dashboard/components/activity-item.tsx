import { ActivityItem as ActivityItemType } from "../types";

interface ActivityItemProps {
  activity: ActivityItemType;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const getColorClass = (color: ActivityItemType["color"]) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div
        className={`w-2 h-2 rounded-full ${getColorClass(activity.color)}`}
      ></div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{activity.title}</p>
        <p className="text-sm text-muted-foreground">{activity.time}</p>
      </div>
    </div>
  );
}
