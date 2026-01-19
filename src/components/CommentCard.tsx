interface CommentCardProps {
  name: string;
  time: string;
  avatar: string;
  text: string;
  isLast?: boolean;
}
export default function CommentCard({ name, time, avatar, text, isLast }: CommentCardProps) {
  return (
    <div className={`${!isLast ? 'mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200' : ''}`}>
      <div className="flex items-start gap-2 md:gap-3">
        <img 
          src={avatar} 
          alt={name}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-semibold text-gray-900 text-sm md:text-base">{name}</span>
            <span className="text-xs md:text-sm text-gray-500">{time}</span>
          </div>
          <p className="text-gray-700 text-sm md:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}