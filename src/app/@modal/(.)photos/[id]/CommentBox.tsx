import { Suspense } from "react";
import { getCommentsByImageId } from "~/server/queries";


async function CommentList({ imageId }: { imageId: number }) {
    const comments = await getCommentsByImageId(imageId);

    if (!comments.length) {
        return (
            <div className="text-slate-400 text-center py-4">
                No comments yet. Be the first to comment!
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="bg-slate-700/50 p-4 rounded-lg space-y-2"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-200">{comment.userId}</span>
                        <span className="text-sm text-slate-400">{comment.createdAt.toDateString()}</span>
                    </div>
                    <p className="text-slate-300">{comment.content}</p>
                </div>
            ))}
        </div>
    );
}

export default function Comments({ imageId }: { imageId: number }) {
    return (
        <div className="space-y-4 max-w-2xl mx-auto">
            <h4 className="font-medium text-slate-100 text-lg">Comments</h4>

            <Suspense
                fallback={
                    <div className="animate-pulse space-y-4">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="h-24 bg-slate-700/50 rounded-lg" />
                        ))}
                    </div>
                }
            >
                <CommentList imageId={imageId} />
            </Suspense>

        </div>
    );
}