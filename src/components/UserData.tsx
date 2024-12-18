'use client'
import { useEffect, useState } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";
// import TranslucentIconButton from "./buttons/TranslucentIconButton";

interface RendererProps {
    json: string;
    indentation?: number;
}

SyntaxHighlighter.registerLanguage("json", json);

const UserData: React.FC<RendererProps> = ({ json, indentation = 2 }) => {
    const [formattedText, setFormattedText] = useState("");
    const [error, setError] = useState<string>();

    const onCopy = () => {
        navigator.clipboard.writeText(formattedText);
    };

    useEffect(() => {
        try {
            if (json === "") {
                setFormattedText("");
                setError(undefined);
                return;
            }

            const parsed = JSON.parse(json);
            const formatted = JSON.stringify(parsed, null, 2);
            setFormattedText(formatted);
            setError(undefined);
        } catch (error: any) {
            setFormattedText("");
            setError(error.message);
        }
    }, [indentation, json]);

    return (
            <div className="relative">
            <SyntaxHighlighter
                className="rounded-md"
                language="json"
                style={prism}
                customStyle={{
                    margin: "0",
                    padding: "0",
                    background: "transparent",
                }}
                codeTagProps={{ className: "bg-transparent" }}
            >
                {formattedText}
            </SyntaxHighlighter>
            {/* {error ? (
                <p className="absolute top-0 left-0 text-red-400 max-w-full whitespace-pre-wrap m-4">
                    {error}
                </p>
            ) : (
                <div className="absolute top-0 right-0 m-2 flex flex-row justify-end">
                    <CopyUserData onClick={onCopy} title="Copy" label="Copy">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                    </CopyUserData>
                </div>
            )} */}
        </div>
    );
}


export default UserData;