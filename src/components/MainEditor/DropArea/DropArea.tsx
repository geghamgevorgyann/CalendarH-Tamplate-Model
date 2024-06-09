/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import useStyles from "./styles";

const DropArea: React.FC = () => {
  const styles = useStyles();
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    if (draggableElement) {
     if (id === "item1" || id === "item2") {
        const inputElement = document.createElement("input");
        inputElement.value = "";
        inputElement.placeholder = id === "item1" ? "Title" : "Pharagraph";
        inputElement.id = `${id}-input-${new Date().getTime()}`;
        inputElement.className = styles.input;
        inputElement.onchange = (e: any) => {
          inputElement.value = e.target.value;
        }
        event.currentTarget.appendChild(inputElement);
      }else if (id === "item3") {
        const button = document.createElement("button");
        button.id = `${id}-button-${new Date().getTime()}`;
        button.innerText = "Button";
        button.className = styles.button;
        event.currentTarget.appendChild(button);
      }else if (id === "item4") {
        const img = document.createElement("input");
        img.type = "file";
        img.accept = "image/*";
        img.id = `${id}-img-${new Date().getTime()}`;
        img.className = styles.img;
        img.onclick = () => {
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.accept = 'image/*';
          fileInput.onchange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.files && target.files[0]) {
              const reader = new FileReader();
              reader.onload = (event : any) => {
                const imgElement = document.createElement('img');
                imgElement.src = event.target?.result as string;
                imgElement.className = styles.img;
                imgElement.style.width = '100px';
                imgElement.style.height = '100px';
                event.currentTarget?.parentElement?.appendChild(imgElement);
              };
              reader.readAsDataURL(target.files[0]);
            }
          };
          fileInput.click();
        };
        event.currentTarget.appendChild(img);
      }else if (id === "item5") {
        const textAreaElement = document.createElement("textarea");
        textAreaElement.id = `${id}-textarea-${new Date().getTime()}`;
        textAreaElement.className = styles.textAreaInput;
        event.currentTarget.appendChild(textAreaElement);
      }
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };


  return (
    <div
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      className={`${styles.dropArea} ${isDragging ? styles.dropAreaActive : ''}`}
    ></div>
  );
};

export default DropArea;
