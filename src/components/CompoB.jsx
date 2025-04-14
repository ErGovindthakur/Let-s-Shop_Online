import CompoC from "./CompoC";

const CompoB = ({data}) => {
  const {name} = data;
  return (
    <div>
      <h1>CompoB = {name}</h1>
      <CompoC data = {data}/>
    </div>
  );
};

export default CompoB;
