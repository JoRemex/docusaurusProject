---
sidebar_position: 18
---

# CSS


```jsx title="projetoEstagio/todo_list/src/styles.css"

   
* {
  margin: 0;
}
body {
  background-image: linear-gradient(210deg,#d6dadd 0%, #9dbecafe 80%);
  color: white;
  min-height: 100vh;
}
.vazio {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #000000;
  margin-left: 20px;
 
  margin-bottom: 15px;
  border: 3px solid black;
  border-radius: 10px;

}
.navbar{
  margin-bottom: 7rem;
}



 
.card:hover {
  font-size: 400px;
  background-color: #c9fdecf8;
  box-shadow: 7px 7px 13px 0px rgba(255, 255, 255, 0.858);
  transform: scale(1.15);
  
 
} 
.newTodo:hover {
  border-left: 3px solid #fffb00;

}
 
.inProgress:hover {
  border-left: 3px solid #3bb54a;
}
 
.done:hover {
  border-left: 3px solid #ff0015;
}
.newTodo {
  color: #fffb00;  
}
 
.inProgress {
  color: #3bb54a;
}

.done{
  color: #ff0015 ;
}
 
.card {
  border-radius: 15px;
  background-color: #c9fdec8e;
  box-shadow: 7px 7px 13px 0px rgba(255, 255, 255, 0.22);
  padding: 30px;
  margin: 5px;
  width: 200px;
  transition: all 0.2s ease-out; 
  text-shadow: -1px 0 rgba(0, 0, 0, 0.2), 0 1px rgba(0, 0, 0, 0.2), 1px 0 rgba(0, 0, 0, 0.2), 0 -1px rgba(0, 0, 0, 0.2);
cursor: pointer;
}

.grelha{
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}

```
