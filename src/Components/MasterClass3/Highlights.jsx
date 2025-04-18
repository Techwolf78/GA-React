import {
  UserCheck,
  BadgeCheck,
  Users,
  BriefcaseBusiness,
} from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: 'Designed for Working Professionals',
    description:
      'Flexible learning crafted for professionals, tackling real challenges and shaping future opportunities.',
  },
  {
    icon: <BadgeCheck className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: 'Industry Acknowledged Certificates',
    description:
      'Earn certificates recognized by industry leaders upon program completion.',
  },
  {
    icon: <Users className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: 'Peer to Peer Cohort Learning',
    description:
      'Collaborative group learning that celebrates individual strengths and fosters impactful knowledge sharing.',
  },
  {
    icon: <BriefcaseBusiness className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: 'Learn from Industry Leaders',
    description:
      'Get trained by top industry experts through hands-on sessions for real-world professional growth.',
  },
];

const Highlights = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16">
<h2 className="text-4xl text-[#000000] font-bold mb-6 flex flex-col relative ">
Empowering Growth. Enabling Futures.
  <span className="block h-1 w-12 bg-[#00A59F] mt-2 rounded-full"></span>
</h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border-2 border-solid border-[#00BFA6]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
              <p className="text-[#027093] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
