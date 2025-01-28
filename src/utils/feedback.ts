export const getSentimentFeedback = (score: number): string => {
    if (score > 0) {
        return "Good"
    } else if (score < 0) {
        return "Bad"
    } else {
        return "Neutral"
    }
}