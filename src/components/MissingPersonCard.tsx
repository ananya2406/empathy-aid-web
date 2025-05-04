
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MissingPersonCardProps {
  name: string;
  age: number;
  gender: string;
  image: string;
  lastSeen: {
    date: string;
    location: string;
  };
  status: 'Missing' | 'Found' | 'Under Investigation';
  reportId: string;
}

const MissingPersonCard = ({ 
  name, 
  age, 
  gender, 
  image, 
  lastSeen, 
  status, 
  reportId 
}: MissingPersonCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'Found':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Found</Badge>;
      case 'Under Investigation':
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Under Investigation</Badge>;
      case 'Missing':
      default:
        return <Badge className="bg-red-100 text-red-800 border-red-200">Missing</Badge>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 h-40 sm:h-auto relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            {getStatusBadge()}
          </div>
        </div>
        
        <div className="p-5 sm:w-2/3">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center gap-x-4 text-sm text-gray-500 mb-3">
            <span>{age} years old</span>
            <span>{gender}</span>
            <span className="text-xs text-gray-400">ID: {reportId}</span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-2 text-relief-blue" />
              <span>Last seen on {lastSeen.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-2 text-relief-blue" />
              <span>{lastSeen.location}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Button size="sm" className="bg-relief-blue hover:bg-relief-blue-dark">
              View Details
            </Button>
            <Button variant="outline" size="sm" className="text-relief-teal border-relief-teal hover:bg-relief-teal hover:text-white">
              Share Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissingPersonCard;
