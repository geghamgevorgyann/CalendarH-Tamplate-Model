import React from 'react';
import useStyles from './styles';

interface DraggableItemProps {
  id: string;
  textContent: string;
}

const DraggableItem = ({ id, textContent }: DraggableItemProps) => {
  
  const styles = useStyles();
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      id={id}
      draggable="true"
      onDragStart={onDragStart}
      className={styles.draggableItem}

    >
      {textContent}
    </div>
  );
};

export default DraggableItem;
