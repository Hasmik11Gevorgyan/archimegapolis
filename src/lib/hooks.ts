"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, duration: number = 2000): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (target === 0) {
            setCount(0);
            return;
        }

        const startTime = Date.now();
        const startCount = 0;

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startCount + (target - startCount) * eased);
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [target, duration]);

    return count;
}
