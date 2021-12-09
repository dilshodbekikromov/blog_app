const express = require('express')
const bodyParser = require('body-parser')
const ejs = require("ejs")

const contactContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur odio facilis, dolore cum tenetur asperiores provident sunt. Distinctio nulla commodi nam. Velit voluptatem illo ipsa architecto nulla deserunt quidem excepturi illum voluptates delectus aut vero sed id quibusdam ab, exercitationem minus laborum reiciendis assumenda saepe possimus vitae. Quas consequuntur ex, distinctio labore cumque a, blanditiis consectetur esse tempore dolores sed illum mollitia, expedita placeat optio! Maxime, a! Officiis amet quos totam ipsum laboriosam commodi, numquam voluptatem tenetur cumque mollitia libero aliquam. Ea doloribus, laudantium optio sed accusamus voluptate praesentium dolores incidunt at quis, nisi quod? Laudantium nemo nisi modi aut, sit nostrum voluptates voluptate odio deleniti aspernatur commodi cum rerum tempora in odit eos iusto ratione distinctio quo laborum aliquam nesciunt asperiores consequatur! At cumque consequatur nesciunt voluptatem nihil possimus quas eveniet. Ad unde cumque placeat aliquam esse odio laboriosam. Repudiandae saepe et, voluptas nobis est, impedit ducimus officia inventore, ipsam ipsum dolores aspernatur beatae eius non sed hic placeat culpa neque! Delectus id iste atque earum vel dolorum exercitationem, iusto eos, facere minima, et quidem inventore quod. Inventore fugiat delectus nemo cum odio dolore libero non suscipit? Ipsa hic explicabo aspernatur? Saepe voluptatibus, maiores exercitationem molestias ipsum nihil accusantium quis dolorum consequuntur ducimus! Blanditiis eius debitis, officia in odio omnis qui iusto sunt dicta voluptatem, culpa quibusdam tenetur soluta? Dolorum ipsam, mollitia labore itaque delectus voluptas cum saepe provident voluptatem consequatur magnam inventore molestiae quisquam! Pariatur rem modi molestias! Vero totam, repudiandae maiores ducimus beatae aperiam numquam, eligendi porro quo minima quisquam sapiente consectetur voluptates eius? Recusandae veniam ab pariatur necessitatibus ex consequuntur facilis magni tempora laudantium at dolor, quam unde consequatur alias minima, non nulla ullam ipsum cum. Vel totam impedit ab recusandae ipsam quia unde in! Perferendis excepturi, sit fuga optio possimus maiores. Veniam nam ullam "
const aboutContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum voluptates porro aliquam nisi quia numquam. Porro reiciendis, officiis necessitatibus eveniet ullam, cupiditate illum suscipit aliquam recusandae veniam id repudiandae blanditiis. Corporis, accusantium! Dolorem non deleniti odio molestiae accusantium itaque libero velit officia distinctio est assumenda quia tempora ex, eaque deserunt sequi error sed incidunt? Porro dolor accusantium repellendus quam commodi. Eaque asperiores quis consectetur? Assumenda optio corrupti sequi quisquam quibusdam cupiditate deserunt aliquam voluptate beatae aperiam eum odit rerum expedita, molestiae dolore nam perspiciatis voluptatum officiis cumque. Architecto, dignissimos in consequuntur perferendis vero repellendus odit at incidunt illum amet, est, nam blanditiis earum eum libero. Odit, a in eius sint quidem consectetur, temporibus eum deleniti architecto quisquam atque voluptates quia ratione aliquid blanditiis quae modi voluptas! Iste, repellendus! Quam odio illum recusandae. Voluptatibus officiis, tempora exercitationem aliquid minus, soluta, provident vitae enim voluptate aut temporibus iusto delectus? Itaque, id ea? Dolorem similique, consectetur non debitis reiciendis dolores sit accusamus? Consequuntur aliquam modi debitis, consectetur nesciunt quas, eligendi corporis ullam quo accusantium adipisci mollitia possimus voluptates nostrum praesentium labore, molestiae harum necessitatibus! Reprehenderit, repudiandae numquam a ipsum eos dolor autem voluptatibus earum natus, esse ad delectus veritatis sit facilis minima officia voluptatum? Iste totam rem accusamus repellendus itaque sint quisquam, voluptatem nobis eos tempore vero culpa delectus, blanditiis nisi sunt odio quo, eveniet velit animi. Consequuntur totam consectetur pariatur sit quas ullam magni, similique dolorum cumque provident. Maiores, facilis. Animi perspiciatis repellendus nostrum dolores temporibus impedit placeat nesciunt, non sunt, optio, eligendi debitis porro eos sit. Tempore totam nostrum dolore maxime, harum vel voluptatibus, illum labore perspiciatis provident error consequatur assumenda nesciunt nihil eum iure corporis! Ex, rem, necessitatibus fuga cum non tempora dolorum facilis inventore blanditiis, delectus numquam quae. Necessitatibus esse perferendis vero aut quidem? Sed, velit. Repellat tempore porro assumenda ex quidem, quod labore dolore sit debitis corporis optio quibusdam facere, ad eligendi esse fugit. Aut quia perferendis incidunt ipsa. Cum, ab incidunt quisquam architecto modi laborum tempore nostrum animi quia. Earum, et voluptatem labore deleniti ea adipisci! Ullam sequi nobis perferendis. Molestias perferendis voluptate ab illum architecto ad veritatis deleniti praesentium vitae libero, aperiam nam eveniet, ipsa accusantium, cumque et tenetur voluptas dolore nemo illo pariatur aut dignissimos id! Omnis quas quibusdam harum animi assumenda voluptatem fuga rem, suscipit quaerat eius mollitia facilis veritatis provident quo quis sit inventore maiores debitis doloribus, consequatur error eos eligendi. Cum inventore voluptatibus praesentium. Porro rerum magnam assumenda consectetur. Quam sapiente ipsum hic itaque nam libero unde possimus labore illum voluptatibus saepe id iure modi nostrum nihil porro ex autem, aliquam similique sit corporis nobis placeat nulla architecto? Tempora alias aut rerum, obcaecati totam ut quia, sit voluptas atque qui earum rem assumenda! In, adipisci ipsam assumenda beatae, culpa mollitia nisi, natus cum debitis corrupti voluptates excepturi fuga nulla odio impedit. Provident iure tempore alias quam quas est perferendis, ex asperiores accusamus modi cupiditate quisquam, illum sunt eveniet enim voluptate blanditiis dolore optio animi omnis. Quis quidem ratione natus quos odit!"
const homeStartingContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus soluta asperiores, ipsam minus dolorem facere. Rem ex ab quaerat accusamus cum eaque ullam nemo aspernatur. Sunt, cum ea optio et delectus ducimus eveniet vero suscipit nisi unde commodi! Ipsum nobis minus architecto provident totam libero, sed, cupiditate modi vel tenetur quod eum laboriosam ex quae non voluptatibus ipsa enim rerum voluptatum. Molestiae, modi sequi. Amet tempore commodi aliquam ea id dolores nihil, soluta laboriosam! Dignissimos pariatur exercitationem possimus reprehenderit eligendi aperiam delectus obcaecati earum! Iste, delectus quo! Aperiam blanditiis deserunt distinctio commodi molestiae architecto non, eum nihil cum reprehenderit quae rem esse illo iusto amet, sequi veniam officiis tempora! Odio molestias nisi impedit, architecto totam explicabo dolor doloribus eos, repudiandae iste voluptatum quasi commodi ducimus rerum, perferendis quisquam molestiae cum corrupti quis quam! Nostrum, exercitationem soluta iure odio deserunt porro inventore pariatur nemo ab rem. Aspernatur voluptas facilis exercitationem ratione error labore quasi non eaque quo, dicta minus quod quaerat officiis, obcaecati reprehenderit magni temporibus cum ullam. Corrupti commodi nostrum saepe aliquid aliquam, accusamus consequatur cupiditate. Itaque at, deserunt asperiores aspernatur quas facilis veniam harum odio id quisquam sapiente unde minus laboriosam incidunt vero distinctio, consectetur, maiores sunt. Iste neque quidem labore doloremque illo? Suscipit tenetur aspernatur tempora, ut quaerat repellendus ab sapiente quod fugiat dicta, iste similique maxime amet officiis laudantium quisquam minus quas. Vero porro itaque, nihil eos temporibus cupiditate distinctio explicabo consequatur optio mollitia iusto eveniet nemo adipisci quae ab a dolore iure totam. Incidunt provident, ex placeat, architecto voluptatum repudiandae veniam quidem nihil dignissimos consequuntur odio, deleniti dolorum tempora neque beatae! In fuga error corrupti quia, placeat architecto illum, temporibus sed aspernatur culpa recusandae amet atque veniam pariatur quam eos animi commodi iusto quasi perspiciatis sit alias dolores expedita magni. Corporis nihil dolorum iste accusamus dignissimos. Aliquid quasi quos dolorum iure, unde culpa obcaecati illum a perspiciatis rem voluptate molestias minima voluptates quo voluptatem, inventore deserunt vero, nostrum maxime. Iste magnam debitis dolore sapiente consequuntur dicta repudiandae sint aut velit numquam laboriosam possimus, corporis aliquam. Quos facilis laudantium alias qui aperiam sapiente, voluptates porro voluptas iusto autem velit inventore molestiae mollitia explicabo similique saepe facere, nobis nam aliquam nulla, eveniet tempore? Excepturi, eum eius soluta a quia ea quisquam. Tempore quam ipsam fugiat deserunt vel magni accusamus alias impedit. Blanditiis atque architecto repellat, repellendus sequi quae consectetur molestiae ut rem nisi nesciunt, exercitationem accusantium obcaecati dolorem pariatur ullam repudiandae nihil, minus quidem? Dicta, sunt voluptate. Rerum, earum tempora? Fugit doloremque explicabo aperiam quas, obcaecati, libero iusto nam perspiciatis quibusdam eos, aliquid laborum alias dolor. Tempora est quisquam ea porro praesentium consequuntur saepe fuga? Nam distinctio inventore quasi provident cum voluptatibus eos facere, perferendis quaerat rem expedita aperiam pariatur ducimus in voluptatum minus sed nulla architecto placeat. Voluptatibus inventore cumque nihil possimus dicta sit, laudantium aperiam eius quam rem soluta consequuntur minima aspernatur iste labore aut nostrum sint velit repellendus voluptates voluptatum tempora maxime? Omnis nostrum, sapiente odio facere ipsa aliquam alias quae. Eveniet tempore doloribus laborum quia mollitia. Nihil provident harum accusantium maxime voluptate veritatis molestiae quae quam ratione expedita quasi laborum reiciendis reprehenderit est vero, fuga voluptatibus? Distinctio, obcaecati dolorem illo rem accusantium reprehenderit? Laudantium fugiat natus nobis quae fuga quisquam officiis porro cumque est aperiam commodi velit maiores pariatur, adipisci quis aut consequatur molestias atque deleniti! Deleniti culpa repellendus dignissimos quisquam cumque veritatis totam! Animi porro cumque atque, ipsa fugiat est consectetur voluptate unde quo saepe quod repellendus. Animi cumque vel sint itaque, natus mollitia iste nostrum ratione at, eos odit numquam non porro temporibus. Blanditiis aperiam voluptas corrupti, deleniti suscipit ratione commodi perspiciatis saepe incidunt quod nesciunt nisi voluptatibus eveniet ut illum quia quibusdam provident eius similique dignissimos earum sunt culpa cumque atque? Facere sint temporibus earum atque voluptatum? Magnam numquam in a explicabo neque animi quis laboriosam distinctio maiores. Quasi assumenda vel, quae expedita aliquam ipsum accusamus quidem ex tempore, perspiciatis minima incidunt atque ea nulla vitae error doloremque. Est impedit perspiciatis quaerat dolorem inventore architecto fuga sapiente natus ullam neque, fugiat, in voluptates officia debitis vitae veniam? Natus, commodi corrupti possimus totam vel voluptatum obcaecati quia neque labore, culpa ipsum provident molestias deleniti. Nam magnam esse quod eligendi nesciunt fuga optio dolores perspiciatis dolorem assumenda qui voluptatibus quasi possimus quae iure explicabo dolorum, dolore tenetur rem dicta pariatur? Quo ab similique amet dicta! Iure ipsam ut alias consequatur ipsa quos earum voluptate a error pariatur blanditiis dolor delectus repellat perferendis incidunt quaerat, ex quis quibusdam facilis id omnis laborum. Ipsum laboriosam corrupti unde sit, quibusdam corporis inventore recusandae ducimus optio rem tenetur id ratione vel odio accusantium eos officia eius explicabo laborum, nulla dolor temporibus quod. A asperiores aspernatur magnam deleniti cum et dolore pariatur, architecto earum atque praesentium dicta, quis, ex amet illum laboriosam ipsa deserunt vero sequi ut reprehenderit? Iste aut necessitatibus voluptate sed harum, eos veritatis vel nemo aperiam corrupti. Ea fugit laborum id fuga. Non ipsa ea nesciunt dolore voluptas esse nihil omnis accusantium, pariatur, accusamus veniam eaque possimus ad deleniti obcaecati adipisci. Alias veniam illum quia quis culpa praesentium? Iusto dolore veniam praesentium neque eaque eligendi ullam beatae, adipisci aperiam repudiandae officia velit fugiat cupiditate exercitationem dolorem ipsum nihil illo ut similique asperiores nobis, repellendus quis sit! Tempore itaque accusamus quia iure explicabo ipsa labore quis enim reiciendis suscipit iusto, repellat cum minima, vero aut. Natus aperiam ea modi at, quos eius atque dicta. Iste expedita nihil et consequatur rerum. Deleniti eum in hic minima. Aliquid, fugit, perferendis dolores dolor temporibus enim numquam natus aliquam optio deleniti tempora, porro quae ad molestiae. Veniam ipsam culpa architecto labore aut id iure voluptatibus necessitatibus eius doloribus facere inventore, accusantium dolorem ex reprehenderit, dolore et impedit adipisci, nemo eum? Incidunt fuga voluptatibus aliquam quisquam facilis nobis ipsum nam harum saepe voluptatem, quam eligendi ratione perferendis, accusamus quae molestiae ab eveniet officiis ipsa eaque odit? Explicabo accusamus hic odio odit, veritatis vel saepe assumenda laboriosam dolore, autem fugiat eius est maiores voluptatem. Nemo vero esse quas mollitia iure praesentium suscipit!"
 
const app = express()
app.set('view engine', 'ejs')

let posts = [];



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , (req ,res ) => {
res.render("home", {
    startingContent:homeStartingContent ,
    posts : posts
});


})
app.get("/about" , (req , res) => {
res.render("about", {aboutContent:aboutContent} )
})
app.get("/contact" , (req , res) => {
res.render("contact", {contactContent:contactContent} )
})
    
app.get("/compose" , (req,res) => {
res.render("compose")
})
app.post("/compose" , (req ,res ) => {
const post =
 {
title: req.body.postTitle ,
content:req.body.postBody
}
posts.push(post);
res.redirect("/");
})

































app.listen(3000 , ()=> console.log('server is running at port 3000'))
