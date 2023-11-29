const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-grey-200 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize text-blue-600">
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
