interface CommentCardProps {
  name: string;
  time: string;
  avatar: string;
  text: string;
}
export default function CommentCard({ name, time, avatar, text }: CommentCardProps) {
  return (
    <div className="flex gap-4 p-4 bg-[#f9f9f9] rounded-lg border border-[#e0e0e0] hover:shadow-md transition-shadow">
      <img 
        src={avatar} 
        alt={name}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-[#1a1d29]">{name}</h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-[#2c3e50] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}