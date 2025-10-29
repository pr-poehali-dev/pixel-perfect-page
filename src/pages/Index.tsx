export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#999999]">
      <div className="w-[780px] h-[600px] bg-[#999999] flex flex-col font-['Arial',sans-serif] text-[13px] relative overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#999999] h-[70px] flex items-center justify-between px-[35px] relative">
          <div className="text-white">
            <span className="text-[28px] font-light tracking-tight">Your</span>
            <span className="text-[28px] font-normal tracking-tight">Company</span>
          </div>
          
          <div className="flex gap-[15px] text-white text-[11px] absolute right-[15px] top-[52px]">
            <span>Home</span>
            <span>|</span>
            <span>FAQ</span>
            <span>|</span>
            <span>Contact Us</span>
          </div>
        </div>

        {/* Orange Divider */}
        <div className="h-[5px] bg-gradient-to-r from-[#999999] via-[#CC6600] to-[#999999]"></div>

        {/* Main Content Area */}
        <div className="flex flex-1 relative">
          {/* Left Sidebar */}
          <div className="w-[190px] bg-[#4d6e8f] flex flex-col pt-[10px]">
            {[
              'PRODUCTS',
              'SERVICES', 
              'SUPPORT',
              'DOWNLOAD',
              'HELP CENTER'
            ].map((item, index) => (
              <div 
                key={item}
                className="h-[21px] flex items-center px-[16px] text-white text-[11px] tracking-[0.5px] cursor-pointer hover:bg-[#3d5e7f] relative"
              >
                <div className="absolute left-[16px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-white"></div>
                <span className="ml-[10px]">{item}</span>
              </div>
            ))}
            
            {/* Woman Image */}
            <div className="mt-[40px] mx-[15px]">
              <img 
                src="https://cdn.poehali.dev/projects/a6220957-4e17-4c14-823d-969cfdd44937/files/1332af6d-348e-492d-aa19-8ca8b4d538b9.jpg" 
                alt="Representative"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-[#666666] flex flex-col">
            {/* Gray Header Bar */}
            <div className="h-[40px] bg-[#666666] flex items-center px-[15px]">
              <span className="text-white text-[17px] tracking-wide">Your Company Slogan</span>
            </div>

            {/* White Content */}
            <div className="flex-1 bg-[#eeeeee] px-[20px] py-[15px] relative">
              {/* Welcome Section */}
              <div className="mb-[12px]">
                <span className="text-[#666666] text-[13px]">Welcome to </span>
                <span className="text-[#0066CC] font-bold text-[13px]">Company</span>
                <span className="text-[#666666] text-[13px]"> Website!</span>
              </div>

              {/* The Labyrinthine Header */}
              <div className="mb-[10px]">
                <span className="text-[#333333] font-bold text-[13px]">The Labyrinthine</span>
                <span className="text-[#333333] text-[13px]"> Nature of Web Services</span>
              </div>

              {/* First Paragraph */}
              <p className="text-[#333333] text-[12px] leading-[17px] mb-[10px]">
                Web services is the latest and clearly favored denomination invoked to describe a 
                way of allowing computers to interact and make decisions based on the data that 
                has been fed to them. That much is true. But what non-analysts or non-standards 
                gurus may not know, is that there are other options that are not as popular 
                today. Yet analysts and standards workers have maintained that schemas such as 
                ebXML, or Electronic Business XML or Extensible Markup Language, remain viable.
              </p>

              {/* Web services versus ebXML Header */}
              <div className="mb-[8px]">
                <span className="text-[#333333] font-bold text-[13px]">Web services versus ebXML</span>
              </div>

              {/* Second Paragraph */}
              <p className="text-[#333333] text-[12px] leading-[17px] mb-[10px]">
                For those that go back a little ways in the software networking annals, ebXML is 
                meant to be the platform of EDI or Electronic Data Interchange. ebXML has also 
                been around for a couple of years — the messaging aspect of the seven-parts of the 
                ebXML standard was ratified in 2000.
              </p>

              {/* Third Paragraph */}
              <p className="text-[#333333] text-[12px] leading-[17px]">
                The end purpose in all of this is for the computer and corresponding network to fill 
                items such as purchase orders, and to fill them intelligently. For instance, if a com-
                puter has two copies of the same purchase order, with the functionalities provided 
                by ebXML, the computer will know that it should only process one of them. This can 
                be crucial in businesses whose systems process POs numbering in the millions
              </p>

              {/* Footer */}
              <div className="absolute bottom-[10px] left-0 right-0 text-center">
                <span className="text-[#666666] text-[10px]">Copyright © 2003 Your Company Name. All Right Reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
