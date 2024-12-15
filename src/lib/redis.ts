import { Redis } from "@upstash/redis";

export const RedisClient = () => {
  const redis = new Redis({
    url: "https://honest-doberman-27161.upstash.io",
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  return redis;
};