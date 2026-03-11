"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  detail?: string;
  href?: string;
  index?: number;
}

export function InfoCard({
  icon,
  title,
  description,
  detail,
  href,
  index = 0,
}: InfoCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-ink/5 p-6 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      {icon && <div className="text-brand text-2xl mb-4">{icon}</div>}
      <h3 className="font-display text-xl uppercase tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink/50 leading-relaxed">
        {description}
      </p>
      {detail && (
        <p className="mt-3 text-sm font-semibold text-brand">{detail}</p>
      )}
      {href && (
        <div className="mt-4 text-[13px] font-bold uppercase tracking-wider text-brand group-hover:translate-x-1 transition-transform">
          Learn more &rarr;
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
