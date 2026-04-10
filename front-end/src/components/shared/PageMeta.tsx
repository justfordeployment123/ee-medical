/**
 * PageMeta — sets <title> and <meta name="description"> per page.
 * React 19 hoists these to <head> automatically — no react-helmet needed.
 */
import React from "react";

interface PageMetaProps {
    title: string;
    description: string;
}

const SITE = "E&E Medicals";

export const PageMeta: React.FC<PageMetaProps> = ({ title, description }) => (
    <>
        <title>{title} | {SITE}</title>
        <meta name="description" content={description} />
    </>
);
