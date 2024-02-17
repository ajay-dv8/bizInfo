import React, { ChangeEvent, FC, useState } from 'react';
import { Input } from './ui/input';

interface ImageUploaderProps {
  onUpload: (files: FileList) => void;
}
TODO: 'fix this component to allow multiple image upload';

const ImageUploader: FC<ImageUploaderProps> = ({ onUpload }) => {
  'use client';
  // This state is used to store the currently selected files and display their names
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
    if (e.target.files) {
      onUpload(e.target.files);
    }
  };

  return (
    <div>
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      {selectedFiles && (
        <div>
          {Array.from(selectedFiles).map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
