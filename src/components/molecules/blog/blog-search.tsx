import SearchBar from "@/components/atoms/search-bar";

export const BlogSearch = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <div className="mb-8">
        <SearchBar placeholder="Search blogs..." value={value} onChange={onChange} theme="light" />
    </div>
);
