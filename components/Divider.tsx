type DividerProps = {};

const Divider: React.FC<DividerProps> = () => {
  return (
    <div className="relative mx-0 py-8 xl:-mx-6">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-neutral-300" />
      </div>
    </div>
  );
};

export default Divider;
