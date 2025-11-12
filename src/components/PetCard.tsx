import React, { useState } from "react";
import { MapPin } from "lucide-react";
interface PetCardProps {
  id: number;
  name: string;
  age: string;
  breed: string;
  location: string;
  image: string;

  type: string;
}
const PetCard: React.FC<PetCardProps> = ({
  name,
  age,
  breed,
  location,
  image,
  type,
}) => {
  const [isHovered] = useState(false);
  return (
    <div className="transform overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer border border-border">
      <div className="relative">
        {/* image of the dog*/}
        <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>

        {/* details of the dog*/}

        {/* tag */}
        <div className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {type}
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground truncate">{name}</h3>
            <div className="mt-1 flex items-center text-xs sm:text-sm text-muted-foreground">
              <MapPin size={14} className="mr-1 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>
          <div className="rounded-full bg-secondary px-2 sm:px-3 py-1 text-xs font-medium text-secondary-foreground shrink-0">
            {age}
          </div>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground truncate">{breed}</p>
      </div>
    </div>
  );
};
export default PetCard;
