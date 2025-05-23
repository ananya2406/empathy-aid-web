
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsCard from '@/components/StatsCard';
import Image from '@/components/placeholder/Image';
import { Search, Users, Home, Heart, User, AlertTriangle } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search submitted:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="mt-16 pt-16 pb-20 bg-gradient-to-r from-relief-primary to-relief-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rebuilding Lives Together</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              We provide essential support and resources to those affected by disasters. Join us in making a difference.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Link to="/report">
                <Button size="lg" className="bg-white text-relief-primary hover:bg-gray-100 animate-float">
                  Report Missing Person
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" className="bg-relief-secondary hover:bg-relief-secondary-dark border-2 border-white">
                  Make a Donation
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-relief-primary">
                  Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:block absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-relief-primary-light opacity-20 animate-float"></div>
        <div className="hidden md:block absolute -top-20 -right-20 w-80 h-80 rounded-full bg-relief-secondary-light opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Search Bar */}
      <section className="py-4 bg-white shadow-md relative -mt-6 rounded-t-3xl z-10">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search for missing persons, relief camps, or reports..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-6 w-full rounded-lg shadow-sm border-gray-200 focus:border-relief-primary focus:ring focus:ring-relief-primary/20"
              />
              <Button 
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-relief-primary hover:bg-relief-primary-dark"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-relief-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-relief-gray">Response Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              title="People Assisted"
              value="2,457"
              icon={<Users size={24} className="text-relief-primary" />}
            />
            <StatsCard 
              title="Active Relief Camps"
              value="18"
              icon={<Home size={24} className="text-relief-primary" />}
            />
            <StatsCard 
              title="Registered Volunteers"
              value="642"
              icon={<User size={24} className="text-relief-primary" />}
            />
            <StatsCard 
              title="Total Donations"
              value="$1.2M"
              icon={<Heart size={24} className="text-relief-primary" />}
            />
          </div>
        </div>
      </section>
      
      {/* Latest Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center text-relief-gray">Recent Updates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Update Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1609139098450-79721710fa9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzYXN0ZXIlMjByZWxpZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" 
                  alt="Relief camp workers setting up tents" 
                  className="h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-relief-primary text-white text-xs px-2 py-1 rounded-full">New Camp</span>
                    <h3 className="font-semibold text-lg mt-2">Central District Relief Camp</h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm">
                  New relief camp opened in the Central District with capacity for 200 evacuees. Medical facilities and food distribution available.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">May 2, 2025</span>
                  <Button variant="link" className="text-relief-primary p-0 h-auto">Read More</Button>
                </div>
              </div>
            </div>
            
            {/* Update Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWwlMjBzdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" 
                  alt="Medical supplies needed" 
                  className="h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-relief-secondary text-white text-xs px-2 py-1 rounded-full">Urgent Need</span>
                    <h3 className="font-semibold text-lg mt-2">Medical Supplies Needed</h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm">
                  Urgent request for medical supplies at all camps. Specifically need bandages, antibiotics, and over-the-counter pain relievers.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">May 1, 2025</span>
                  <Button variant="link" className="text-relief-primary p-0 h-auto">Read More</Button>
                </div>
              </div>
            </div>
            
            {/* Update Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1580247817119-c2d4a258f604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb29kZWQlMjByb2FkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" 
                  alt="Flooded road closure" 
                  className="h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Alert</span>
                    <h3 className="font-semibold text-lg mt-2">Road Closure Update</h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm">
                  Highway 101 remains closed between miles 24-36. Alternate routes available via Route 15. Check our map for updated information.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">April 30, 2025</span>
                  <Button variant="link" className="text-relief-primary p-0 h-auto">Read More</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-relief-primary text-relief-primary hover:bg-relief-primary hover:text-white">
              View All Updates
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-relief-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-relief-gray mb-4">How You Can Help</h2>
                <p className="text-gray-600 mb-8">
                  Your support can make a difference in the lives of those affected by disasters. Whether through donations, volunteering, or spreading awareness, every action counts.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/donate">
                    <Button className="bg-relief-primary hover:bg-relief-primary-dark">
                      <Heart size={18} className="mr-2" />
                      Make a Donation
                    </Button>
                  </Link>
                  <Link to="/volunteer">
                    <Button variant="outline" className="border-relief-secondary text-relief-secondary hover:bg-relief-secondary hover:text-white">
                      <User size={18} className="mr-2" />
                      Volunteer Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmolundcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" 
                  alt="Volunteers working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
