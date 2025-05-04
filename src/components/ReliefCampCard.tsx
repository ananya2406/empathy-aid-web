
import { MapPin, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ReliefCampCardProps {
  name: string;
  location: string;
  capacity: {
    current: number;
    total: number;
  };
  lastUpdated: string;
  status: 'Active' | 'Full' | 'Closing Soon';
}

const ReliefCampCard = ({ name, location, capacity, lastUpdated, status }: ReliefCampCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Full':
        return 'bg-red-100 text-red-800';
      case 'Closing Soon':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const capacityPercentage = Math.round((capacity.current / capacity.total) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <Badge className={getStatusColor()}>{status}</Badge>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={18} className="mr-2 text-relief-blue" />
          <span>{location}</span>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center">
              <Users size={16} className="mr-2 text-relief-teal" />
              <span className="text-sm text-gray-600">Capacity</span>
            </div>
            <span className="text-sm font-medium">{capacity.current} / {capacity.total}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                capacityPercentage > 90 ? 'bg-red-500' : 
                capacityPercentage > 70 ? 'bg-amber-500' : 
                'bg-green-500'
              }`}
              style={{ width: `${capacityPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center text-xs text-gray-500 mt-4">
          <Calendar size={14} className="mr-1" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between">
        <Button variant="outline" size="sm" className="text-relief-blue border-relief-blue hover:bg-relief-blue hover:text-white">
          View Details
        </Button>
        <Button size="sm" className="bg-relief-teal hover:bg-relief-teal-dark">
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default ReliefCampCard;
