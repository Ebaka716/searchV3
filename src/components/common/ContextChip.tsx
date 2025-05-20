import React from "react";
import { X, FileText, File, FileImage } from "lucide-react";

export type FileType = "pdf" | "docx" | "txt" | "image" | "other";

function getFileIcon(type: FileType) {
  switch (type) {
    case "pdf":
      return <FileText className="w-4 h-4" />;
    case "docx":
      return <FileText className="w-4 h-4" />;
    case "txt":
      return <FileText className="w-4 h-4" />;
    case "image":
      return <FileImage className="w-4 h-4" />;
    default:
      return <File className="w-4 h-4" />;
  }
}

export interface ContextChipProps {
  fileName: string;
  fileType: FileType;
  onRemove: () => void;
}

const ContextChip: React.FC<ContextChipProps> = ({ fileName, fileType, onRemove }) => {
  return (
    <div className="flex items-center bg-black text-white rounded-full px-3 py-1 mr-2 mb-2 gap-2 shadow-sm">
      {getFileIcon(fileType)}
      <span className="text-xs font-medium truncate max-w-[120px]">{fileName}</span>
      <button
        type="button"
        onClick={onRemove}
        className="ml-1 p-1 rounded-full hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Remove ${fileName}`}
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ContextChip; 