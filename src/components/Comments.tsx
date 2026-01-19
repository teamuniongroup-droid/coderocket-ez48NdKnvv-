import CommentCard from './CommentCard';
const comments = [
  {
    name: 'Jennifer M.',
    time: '2 hours ago',
    avatar: 'https://v0-gelatintrick.vercel.app/images/avatar-jennifer.jpg',
    text: "OMG ladies, this jello trick is absolutely LEGIT! I've been struggling with my weight since hitting menopause at 52, and nothing worked. Lost 15 lbs in just 3 weeks doing this! My husband can't believe it. Seriously, don't skip this video! 🙌"
  },
  {
    name: 'Susan R.',
    time: '4 hours ago',
    avatar: 'https://v0-gelatintrick.vercel.app/images/avatar-susan.jpg',
    text: "Y'all I was SO skeptical about this whole jello thing... but WOW! At 47, I thought my belly fat was here to stay for good. Two weeks in and my jeans are already fitting better! My coworkers keep asking what I'm doing. Game changer! 💖"
  },
  {
    name: 'Karen D.',
    time: '1 day ago',
    avatar: 'https://v0-gelatintrick.vercel.app/images/avatar-karen.jpg',
    text: "This is EXACTLY what I needed! I'm 55 and have tried every diet under the sun - keto, paleo, you name it. Nothing stuck. This simple jello method is so easy and it actually WORKS. Down 12 pounds in a month and I'm not even hungry! Sharing with all my girlfriends! 🎉"
  },
  {
    name: 'Lisa T.',
    time: '1 day ago',
    avatar: 'https://v0-gelatintrick.vercel.app/images/avatar-lisa.jpg',
    text: "Can we talk about how AMAZING this is?? I'm 49 and my metabolism has been slower than molasses. Started this jello routine 3 weeks ago and holy cow, the bloating is GONE and I've lost 8 pounds! My doctor was impressed at my checkup. Don't sleep on this ladies! 👏"
  },
  {
    name: 'Diane W.',
    time: '2 days ago',
    avatar: 'https://v0-gelatintrick.vercel.app/images/avatar-diane.jpg',
    text: "I can't even describe how much this has changed my life! At 58, after menopause hit hard, I'd basically given up on losing weight. This jello trick is so simple but SO effective. Lost 18 lbs in 6 weeks and my energy is through the roof! Feel like I'm in my 40s again! ✨"
  },
  {
    name: 'Nancy H.',
    time: '3 days ago',
    avatar: 'https://v0-gelatintrick.vercel.app/images/avatar-nancy.jpg',
    text: "My daughter sent me this video and I'm so glad she did! At 62, I honestly thought my weight loss days were over. But this jello method is incredible! Not only did I drop 14 pounds, but my skin looks better and my joints don't ache as much. It's like magic, but it's REAL! 🌟"
  }
];
export default function Comments() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto max-w-[800px] px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-[#1a1d29]">Comments</h2>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#4caf50] rounded-full" />
              <span className="text-sm text-gray-600">99%</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}