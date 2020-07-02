// Here you can change the name of the organization to update all pages
var organization = "TechTensta";
var title = "Tech Tensta - Hacker Challenge"

// Note that this header needs to have spaces to the left to align properly
var header = `
<pre>
<a href="index.html" class="uncoloured-link">
     ██╗ ██╗ ████████╗███████╗ ██████╗██╗  ██╗████████╗███████╗███╗   ██╗███████╗████████╗ █████╗  
    ████████╗╚══██╔══╝██╔════╝██╔════╝██║  ██║╚══██╔══╝██╔════╝████╗  ██║██╔════╝╚══██╔══╝██╔══██╗
    ╚██╔═██╔╝   ██║   █████╗  ██║     ███████║   ██║   █████╗  ██╔██╗ ██║███████╗   ██║   ███████║
    ████████╗   ██║   ██╔══╝  ██║     ██╔══██║   ██║   ██╔══╝  ██║╚██╗██║╚════██║   ██║   ██╔══██║
    ╚██╔═██╔╝   ██║   ███████╗╚██████╗██║  ██║   ██║   ███████╗██║ ╚████║███████║   ██║   ██║  ██║
     ╚═╝ ╚═╝    ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝
</a>
</pre>`;


// Functions goes here
function includeHeader()
{
  document.write(header);
}

function includeOrganization()
{
  document.write(organization);
}

function includeTitle()
{
  document.title = title;
}