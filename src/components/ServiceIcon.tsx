import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
  onClick?: () => void;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon: Icon, title, subtitle, href, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="card-divine p-6 text-center cursor-pointer group"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-lg font-semibold font-telugu-serif text-primary">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-telugu-sans">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceIcon;