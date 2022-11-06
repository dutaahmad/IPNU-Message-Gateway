
const TextField = () => {
    return (
        <>
            <div className="mx-auto my-[10%]">
                <textarea type="text"
                    name="text"
                    placeholder="Type here!"
                    className="rounded-md
                              h-[50vh]
                              w-[17rem]
                              text-justify
                              font-medium"
                >
                </textarea>
            </div>
        </>
    )
}

export default TextField