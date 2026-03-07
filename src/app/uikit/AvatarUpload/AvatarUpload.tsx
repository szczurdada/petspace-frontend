"use client";

import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { MdPhotoCamera } from "react-icons/md";
import styles from "./AvatarUpload.module.scss";

interface AvatarUploadProps {
  size?: number;
  onChange?: (file: File) => void;
}

export const AvatarUpload = ({ size = 120, onChange }: AvatarUploadProps) => {
  const [preview, setPreview] = useState<string>();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);
      onChange?.(file);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={styles.wrapper}
      style={{ width: size, height: size }}
    >
      <input {...getInputProps()} />
      <Avatar size={size} src={preview} />
      <div className={styles.overlay}>
        <MdPhotoCamera size={24} />
      </div>
    </div>
  );
};
