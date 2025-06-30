"use client"

import { useState } from "react"

const reactionEmojis = {
  nice: "👍",
  love_it: "❤️",
  funny: "😂",
  confusing: "🤔",
  informative: "📚",
  well_written: "✍️",
  creative: "🎨",
}

const Comment = ({ item, index, expanded, toggleExpand }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyText, setReplyText] = useState("")

  const { user = {}, review, date, reactions = {} } = item

  const fallbackAvatar = user.username?.charAt(0)?.toUpperCase() || "?"

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    const now = new Date()
    const diff = (now - d) / (1000 * 60 * 60 * 24)
    if (diff < 1) return "Today"
    if (Math.floor(diff) === 1) return "Yesterday"
    if (diff < 7) return `${Math.floor(diff)} days ago`
    return d.toLocaleDateString()
  }

  return (
    <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* User Info */}
      <div className="flex items-start space-x-4 mb-4">
        {user.images?.jpg?.image_url ? (
          <img
            src={user.images.jpg.image_url}
            alt={user.username}
            className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
          />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-semibold text-lg border-2 border-slate-700">
            {fallbackAvatar}
          </div>
        )}

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="text-white font-semibold">{user.username}</h4>
            <span className="text-xs text-slate-400">#{index + 1}</span>
          </div>
          <p className="text-xs text-slate-500">{formatDate(date)}</p>
        </div>
      </div>

      {/* Comment */}
      <p className="text-slate-300 leading-relaxed mb-2 whitespace-pre-line">
        {expanded ? review : `${review.slice(0, 150)}...`}
      </p>
      {review.length > 150 && (
        <button
          onClick={() => toggleExpand(index)}
          className="text-sm text-blue-400 hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}

      {/* Reactions */}
      <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
        <div className="flex flex-wrap gap-2">
          {Object.entries(reactions).map(([type, count]) =>
            type !== "overall" && count > 0 && reactionEmojis[type] ? (
              <div
                key={type}
                className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-sm flex items-center gap-1 text-white shadow-sm transition"
              >
                <span>{reactionEmojis[type]}</span>
                <span className="font-medium">{count}</span>
              </div>
            ) : null
          )}
        </div>

        <div className="flex gap-4 text-sm text-slate-400">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`hover:text-red-400 transition ${
              isLiked ? "text-red-500" : ""
            }`}
          >
            ❤️ Like
          </button>
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="hover:text-blue-400"
          >
            💬 Reply
          </button>
        </div>
      </div>

      {/* Reply Box */}
      {showReplyForm && (
        <div className="mt-5 animate-in fade-in slide-in-from-top-1 duration-300">
          <textarea
            rows={3}
            maxLength={300}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
            className="w-full p-3 rounded-lg bg-slate-700 text-slate-200 border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => {
                setShowReplyForm(false)
                setReplyText("")
              }}
              className="text-sm text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium"
            >
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Comment
