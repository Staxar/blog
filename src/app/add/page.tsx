import TextInput from "../components/TextInput";

export default function AddBlog() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:flex-col">
        <div className="w-full text-center">
          <span className="text-4xl">Start create your blog post</span>
        </div>
        <div className="border-2 h-full w-full rounded border-gray-400">
          <div className="p-8">
            <div className="">
              <div className="">
                <span>Title:</span>
                <TextInput
                  placeholder="Type something..."
                  initialValue=""
                  value=""
                />
              </div>
              <div className="">
                <span>Description:</span>
                <TextInput placeholder="" initialValue="" value="" />
              </div>
              <div className="">
                <span>Category:</span>
                <TextInput placeholder="" initialValue="" value="" />
              </div>
              <div className="">
                <span>Upload image:</span>
                <TextInput placeholder="" initialValue="" value="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
