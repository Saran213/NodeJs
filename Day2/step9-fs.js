let fs = require('node:fs');

let data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit deserunt eveniet quod nihil, autem dicta optio. Nulla, tempora obcaecati sit error vel numquam sequi molestiae optio ab fuga. Exercitationem.
Quibusdam ullam voluptatum, atque quis totam illo, quasi at sed repellat dolore rem vitae, fugiat quam! Corrupti, qui eveniet dolorum, architecto cumque aliquid deserunt veniam doloremque aspernatur quo consequuntur reprehenderit.
Sed eveniet voluptatum corporis sit delectus iste, nemo perferendis ex? Nostrum atque accusamus et laboriosam, eligendi, est libero officia dolor corrupti omnis consequatur unde quisquam animi, quos sunt perferendis blanditiis.
Maxime eaque quis deserunt nihil cum sit, in minima officiis sint temporibus. Officia sapiente iste nemo officiis laborum vero est odit dolores repudiandae, sunt iusto minus cupiditate animi rerum a.
Maiores beatae illum itaque magni sequi nam sunt aliquam eum suscipit ipsum, sint dignissimos nihil mollitia praesentium adipisci sapiente unde necessitatibus voluptatem asperiores modi, consequuntur recusandae non veritatis? Possimus, dolorum.
Aperiam alias doloremque omnis accusantium necessitatibus qui quasi laudantium dolores, sint deserunt aliquid sunt, accusamus eligendi reiciendis? Sed, molestias numquam. Quas inventore vero sit deleniti nulla nesciunt excepturi iure voluptas.
Laborum accusantium consequatur assumenda sint suscipit. Temporibus, provident sit. Distinctio, earum perspiciatis sed quas qui consectetur velit tenetur ex quam, omnis placeat incidunt sunt eum natus? Animi, deserunt quae! Quod.
Excepturi doloremque quia iure vero, dignissimos suscipit minima doloribus consectetur, alias dolor explicabo ratione. Ad, incidunt illum at asperiores doloremque corrupti tempore voluptatibus deleniti quas cupiditate aspernatur, earum error culpa.
Iure hic ipsum minima est voluptatum veritatis sequi. Ad similique accusantium libero et, natus perferendis suscipit autem! Enim suscipit, iure dicta magni similique, ipsum officia, provident aperiam sed obcaecati repellat!
Aliquid adipisci dicta velit quam quod nemo, nulla repellat, distinctio porro tempora, harum itaque doloremque delectus? Ipsa tempora dolorem vitae molestias voluptate? Qui fugit, nisi mollitia id at libero sit!
Ad maiores ab maxime harum perspiciatis, repellat tenetur incidunt cupiditate veritatis cumque iusto placeat velit sapiente eum culpa corrupti autem earum dolore nesciunt aliquam est? Debitis dicta aut cupiditate enim?
Non, ipsam molestiae quod, accusamus provident beatae distinctio repellendus impedit veritatis alias facilis, ab dignissimos quia minus! Veniam animi est sit aliquam! Debitis commodi quos, dolorum voluptas rem autem explicabo.
Labore earum ullam aperiam inventore quidem nulla, porro provident veniam atque et tenetur consectetur tempora soluta velit rerum ad, quis natus! Laboriosam ducimus nisi libero iste ex consectetur inventore obcaecati?
Corporis, corrupti dolores deserunt rem praesentium fugiat eum! Voluptates in natus accusamus dolor ad delectus dolores dolorem! Voluptates dolorum numquam, architecto consequuntur ratione, consectetur odio qui modi accusamus, alias voluptatem!
Vel numquam natus harum ratione cumque omnis sed aliquam dolorem enim et nobis impedit maxime doloremque quasi dignissimos ex officiis, in libero nostrum, magni minus laboriosam quas est! Nam, assumenda.
Ut est impedit id natus, possimus tenetur cumque voluptatem libero autem veritatis consequatur cum cupiditate quia minus obcaecati beatae alias dolores dicta aspernatur! Atque eveniet voluptatem officia quasi, cupiditate blanditiis.
Odit neque ad iusto, eos deleniti rem ipsa reprehenderit illum, nisi reiciendis placeat quis, eligendi enim ratione atque repellat dolorum soluta sit culpa molestias eveniet quos blanditiis consequuntur aliquid. Modi.
Cum unde magnam quam maxime, mollitia perferendis at laboriosam vitae, vero fuga ipsam delectus eveniet neque fugiat natus consequatur? Vero itaque harum dolores ad quos magnam ab modi cumque est.
Quibusdam expedita nam maiores soluta eveniet iste sequi ullam voluptas cumque dolorum doloremque aperiam, quos voluptatum beatae sunt impedit iure! Rerum nobis quam eos error obcaecati aperiam quis sint nisi?
Explicabo dolores in ea expedita voluptates reprehenderit doloribus, fugit repellat consequatur ratione dolore a tempore assumenda, officia odio velit inventore provident debitis commodi tempora repudiandae quaerat quae? Officiis, quae facere.
Debitis similique eum non repudiandae. Voluptatum officiis culpa excepturi tempore similique sapiente corporis aperiam dignissimos, explicabo assumenda mollitia iusto quasi quas iure, molestias reprehenderit laborum illo quam error optio soluta.
Exercitationem, repudiandae quo. Natus voluptatibus deleniti ea ex debitis, cum commodi et. Accusamus, reiciendis? Vero reiciendis autem blanditiis, architecto, harum reprehenderit quasi neque itaque tempore velit asperiores, nihil hic nemo.
Tempore, obcaecati dolore nam quidem, velit distinctio neque beatae totam eos, fugit illum dolorem numquam mollitia veritatis reprehenderit. Expedita fugiat nam praesentium temporibus? Earum corporis praesentium aut ducimus magni distinctio.
Doloribus ipsum provident reprehenderit dolores atque pariatur dolorum officia voluptates hic harum quod possimus ratione qui veritatis, soluta ut alias corrupti? Provident laborum in neque maxime officiis, exercitationem quas excepturi?
Reprehenderit, aspernatur. Libero error deserunt dicta suscipit molestias ut doloribus, ipsam accusamus labore rerum dignissimos quasi minus aut enim officia laboriosam eligendi. Qui fugit corrupti molestiae et, possimus recusandae. Molestiae.
Omnis reprehenderit vero ducimus, dolorem repudiandae eaque, reiciendis mollitia sint unde aperiam aliquid! Quae minus, officiis vitae blanditiis repellat amet exercitationem atque tenetur rem pariatur, natus modi iusto eius voluptatem!
Deserunt temporibus nihil sunt minus quisquam voluptatem esse libero velit, consequatur unde sed quo iure earum eos corporis fugit est? Excepturi iste modi hic, amet voluptatum quidem qui ex! Eum.
Cupiditate, laborum saepe ullam pariatur accusamus aspernatur deserunt illum! Consequuntur labore nam rerum tenetur, deleniti nihil voluptatum consequatur assumenda officia molestias ratione facilis quidem quas quaerat, officiis deserunt optio maiores.
Ullam dolore sint iste eveniet. Id, explicabo saepe delectus ab deleniti optio quisquam inventore maxime dolorem temporibus ipsa dolorum, labore veritatis sint quidem corporis sed sapiente aspernatur velit eveniet iste?
Consequuntur earum, cum velit animi maiores optio nobis officia voluptatem, sint natus ab, accusamus placeat necessitatibus tempore! Corporis totam, numquam quo sit adipisci officiis suscipit ratione commodi, quam laudantium quos.
Quod, consequuntur perferendis, eligendi amet unde pariatur eos architecto non vero atque reprehenderit officiis in sunt aspernatur suscipit recusandae? Incidunt rerum facilis possimus vel accusantium? Consequuntur, ipsum! Esse, voluptatibus earum.
Molestiae ipsam id, modi amet mollitia quas atque eius dolorem a praesentium possimus inventore est porro pariatur quibusdam commodi, beatae esse distinctio. Nobis incidunt unde, tempora molestias eveniet eos maiores!
Quae iste veritatis ex sint, nobis dicta earum sunt nihil voluptatum necessitatibus mollitia harum, alias dignissimos aliquam aut sed libero fugit ipsam placeat modi. Atque animi voluptatum natus similique repellat.
Asperiores illo delectus aliquid maxime quibusdam. Rerum explicabo non veniam cumque blanditiis doloribus dolorem commodi tempora voluptatum ipsam. Perferendis nihil quis ipsam at vitae voluptates, similique nulla consequatur deserunt praesentium!
Impedit quod tempora nam praesentium cum consequuntur odit deserunt sequi minus magni voluptas non, incidunt ducimus doloremque esse saepe ratione perspiciatis labore doloribus modi quam tenetur aperiam laboriosam officia. Dolor!
Ex officiis, veniam itaque quos ullam repellendus iste accusantium hic nobis harum ipsam corporis temporibus voluptatum molestiae ducimus nemo vel qui similique repudiandae placeat assumenda, expedita quam tenetur minus! Magnam!
Nisi rem distinctio eum. Dolorem doloribus numquam, eveniet ut illo laboriosam quos nesciunt obcaecati optio ipsa incidunt tenetur illum! Voluptate voluptatibus deleniti atque mollitia beatae pariatur sit dignissimos. Modi, nostrum.
Dicta totam nisi suscipit architecto nulla ad autem neque? Incidunt optio maiores provident? Nesciunt, quos quaerat quas dolorem tempore repudiandae facilis, cupiditate qui quo odit dicta fuga recusandae quidem nulla!
Ullam commodi asperiores eveniet quibusdam saepe, animi temporibus reiciendis deserunt quis explicabo quos repudiandae laudantium quo ipsam voluptas porro recusandae voluptate libero voluptates obcaecati doloremque hic voluptatem itaque magnam? Quam.
Molestias, nostrum placeat labore sed aspernatur error eligendi accusantium quam aperiam commodi facere beatae, ullam esse libero doloribus reprehenderit distinctio, impedit minus? Aliquid nisi nesciunt necessitatibus pariatur adipisci, obcaecati voluptate.
Ipsam, quam? Beatae, consectetur repellendus tenetur soluta laboriosam amet corporis architecto at consequatur dolores commodi pariatur incidunt culpa. Corporis sapiente aliquid, vel molestiae voluptate impedit recusandae ratione ad reiciendis. In!
Praesentium, architecto ad? Libero, aspernatur non? Itaque tempora eius perspiciatis quod quibusdam? Ipsam velit, dolores quam dignissimos dicta laudantium et tempora. Fugit porro saepe, laboriosam enim repellendus corrupti? Voluptas, ad.
Pariatur debitis animi inventore eligendi neque ipsum illo architecto, fuga reprehenderit expedita laudantium soluta minus atque voluptates, doloribus consequuntur distinctio minima. Pariatur, aut ad atque neque tenetur error ex recusandae!
Maiores suscipit quod cum numquam velit nobis, asperiores quae facilis aspernatur nisi necessitatibus dignissimos sunt ex deleniti fuga vitae perspiciatis reiciendis sequi cumque veritatis? Ipsam deleniti debitis ex minima nisi.
Eum blanditiis debitis explicabo molestias voluptatum dolor, illo distinctio nam consectetur incidunt dolores, veritatis sit? Assumenda asperiores reiciendis eveniet quae earum delectus perferendis laudantium accusamus, commodi laborum nihil officiis velit?
Laboriosam voluptate cupiditate perspiciatis architecto minus, explicabo ullam ad ipsa enim pariatur quae, molestias soluta mollitia ipsum odit nam deserunt beatae voluptates quidem illo iste, a debitis. Fugiat, cupiditate doloribus?
Magnam, adipisci quam doloribus harum fugiat libero temporibus delectus maxime molestiae accusantium veniam illo placeat cumque nostrum quidem enim officia dolores saepe, asperiores, aut nobis laboriosam amet consequuntur tempore? Ad.
Porro ad iste, tempora mollitia illo alias similique velit dolorem voluptates saepe odit eum culpa eveniet quae, omnis inventore officiis, beatae dolorum minus. Vero sequi ipsum ducimus repellat deleniti sint!
Sint rerum aliquid voluptate sapiente dolor, ducimus corporis amet accusamus vero molestias labore harum repudiandae odio? Consequatur quas voluptatum beatae quam, perferendis harum quae. Distinctio dolores cum consectetur? Maxime, atque.
Est obcaecati ad cumque iste voluptas. Ducimus officiis adipisci sint voluptatibus ab quas qui magni asperiores quod totam quasi quidem ullam dicta, ex pariatur delectus, nihil quibusdam neque soluta blanditiis.
Voluptas, molestiae debitis? Quos veniam a nemo dolorem, vel sunt mollitia cupiditate ducimus repellat, perferendis minima autem quas tenetur ab doloribus amet sequi voluptas libero labore, magni provident? Non, esse!
Doloremque voluptas cupiditate ut sint perferendis aliquid corporis nam, at dolore dignissimos, reiciendis, atque eos possimus et architecto nobis aperiam quas culpa eum a maxime. Voluptatum in modi minus. Ab!
Deserunt quidem totam maiores pariatur debitis, nostrum et modi sit magni dignissimos in laboriosam ipsa doloribus veniam eos provident, dolore deleniti perspiciatis sint? Eius quidem numquam, distinctio fugit minus iusto!
Vero, quisquam! Eveniet, nostrum quo? Neque explicabo molestias perferendis dolorum minus magnam tenetur, ex possimus vero nisi aliquid asperiores quisquam facilis quia eum ea sunt? Consectetur reiciendis accusantium dicta velit.
Nemo exercitationem quis veniam, qui necessitatibus labore sit ipsam quibusdam obcaecati ullam repellendus aut quaerat modi molestias atque reprehenderit ratione tempora nesciunt dolore ipsa, praesentium ab nobis fuga placeat! Aspernatur.
Voluptatum incidunt voluptates, numquam eum vel cumque ducimus beatae sunt culpa fuga veritatis quasi debitis, illo quia iste. Officiis facilis obcaecati autem veniam? Rem ad, accusantium soluta hic quia odit?
Laboriosam dicta quod nihil officia, consectetur quisquam ab incidunt doloribus ex autem. Ullam consequatur a porro sed, ducimus, animi nulla fugiat eligendi maiores ea recusandae, quo veniam natus repudiandae aliquid.
Explicabo dolor maiores consequuntur hic illo odit quasi nesciunt nisi repellendus. Quisquam ipsum officiis itaque animi rerum error neque reprehenderit. Quidem neque amet ipsum vel voluptates, error laborum tempore placeat!
Explicabo ullam ipsum dolores optio ipsa rerum ut non nobis iste id voluptatum, porro accusamus dolor eum dicta expedita quidem harum mollitia perspiciatis minus excepturi illo culpa libero eveniet! Optio.
Vero quam harum mollitia dolorum, distinctio asperiores inventore molestias maiores minus eligendi fugiat amet ullam soluta vitae libero a recusandae voluptate quibusdam corrupti adipisci. Dolore accusamus dolorum natus molestiae. Excepturi.
Facilis veritatis velit molestias neque quod fuga animi! Ex ad labore veritatis quae, obcaecati eaque saepe asperiores iste accusamus repellendus magnam cupiditate dignissimos quia doloremque totam, necessitatibus sed maiores fuga.
Officia, reiciendis excepturi. Error nemo dolores necessitatibus molestiae magni animi, tempora repellat perferendis quas quibusdam numquam eligendi incidunt in quam assumenda ex consequatur soluta omnis! Nobis reiciendis provident animi exercitationem?
Repellendus doloremque earum voluptatum voluptatem molestias est dignissimos, quibusdam doloribus qui fugiat soluta deleniti ipsa nisi quaerat aliquid delectus libero quae officiis corrupti dolorem et. Unde nesciunt vitae quibusdam nostrum.
Neque delectus ullam molestias maiores? Sapiente, provident deserunt? Corrupti autem omnis iusto perferendis odit, magnam voluptatum quas quam molestias accusantium optio dicta, voluptate eum? Quod et saepe quos sit exercitationem.
Vero facere quo vitae necessitatibus enim nesciunt praesentium harum consequuntur nobis amet. Facere neque corporis nihil, eius ut facilis error qui labore pariatur distinctio quasi ea, suscipit harum non! Accusantium?
Culpa, iusto. Ducimus, atque sed! Culpa explicabo quaerat id, alias distinctio saepe unde numquam dolor rem ullam nisi odit molestias voluptatem eius rerum recusandae vel repudiandae placeat nihil facilis modi.
Minima temporibus quisquam quae adipisci eum quidem quod debitis quia, quasi accusamus facilis provident laborum at iusto itaque iure, tempora ipsam ad vitae neque aliquid nam consequatur nostrum? Reprehenderit, ullam.
Nam, facere adipisci. Voluptas ipsum odio ullam rem illo, unde blanditiis ratione dolor aspernatur repellat. Rerum excepturi minima culpa, repellendus quasi itaque ratione dolor atque exercitationem omnis assumenda nesciunt saepe!
Quisquam est, quidem facilis corrupti distinctio, vero perferendis rem error illum asperiores quae mollitia. Nesciunt praesentium commodi magnam doloribus, quisquam illum tempore inventore eius voluptates pariatur recusandae odio perferendis iusto.
Sunt consectetur id delectus amet. Explicabo ratione rem nostrum tempore magnam laborum dolorum sapiente itaque mollitia, voluptatum molestiae neque nihil eveniet, saepe, doloremque soluta voluptatem corporis sint harum labore veniam.
Earum minus unde quas labore recusandae tempore assumenda, cupiditate sequi odit alias, nam numquam quia ipsam aut officia culpa architecto ut ullam quis, autem illum! Quod et sapiente unde voluptatibus.
Labore enim ipsum excepturi, assumenda provident laboriosam? Qui ratione est deserunt fugiat. Ad odio aut voluptatibus illo cumque ipsa sit molestiae obcaecati dolorum, non nemo culpa sapiente accusantium officia? Explicabo.
Numquam provident corrupti quidem optio placeat quam ipsum ut rerum aliquam expedita quasi, impedit possimus accusamus autem nam explicabo error? Soluta, excepturi. Dolorem in facilis accusantium voluptates. Et, aut maxime.
Ipsa neque amet cum illo quis aut fugit perspiciatis porro est, ratione assumenda, facilis repellat repellendus molestias eos id tenetur voluptatibus esse! Quo ullam nam reprehenderit! Labore assumenda ad at.
Cum et earum rerum odio, iure labore, corporis maxime, quam tempora quod magni asperiores consequatur voluptatibus veniam eos consequuntur! Deserunt tempora sint architecto impedit sit placeat hic et vero earum.
Corporis laudantium quibusdam, quos corrupti rerum doloremque nulla itaque sapiente unde non asperiores pariatur ut animi accusantium rem ab ea cumque excepturi hic ipsum deserunt at, enim, reprehenderit voluptate. Nobis!
Voluptatem, voluptates. Non laborum a fuga unde nobis sint dolorum dolore corporis vel, aspernatur illo quod ea impedit dolores totam eum quae, excepturi id eius quos eos consequuntur consequatur? Facilis?
Sit praesentium consequatur labore sint, natus deleniti nostrum, libero quasi delectus amet, voluptates laudantium? Nesciunt doloribus, eum, accusamus eaque a harum, distinctio repellendus assumenda ex libero architecto. Hic, doloremque omnis?
Magnam nihil id dignissimos rem eos mollitia. Neque laboriosam aliquam a earum tenetur nobis recusandae consequuntur, cum porro facere! Enim ipsam autem, sit laudantium porro nostrum reiciendis corrupti tempore omnis.
Fuga non dolorem, atque tempora quae consequuntur quod itaque, animi, explicabo voluptatum recusandae debitis voluptas? Impedit in delectus consequatur minima recusandae eaque blanditiis asperiores cumque ex, tenetur, quidem ipsa nostrum!
Atque neque id doloremque perferendis, error fugit provident porro necessitatibus deleniti rerum quia et, expedita quas dolorem molestias, quis laborum facilis ad deserunt nesciunt? Ut eos delectus neque vero ducimus.
Est quidem amet vero maiores aliquid ullam nemo modi, eligendi vitae placeat quos totam consequatur! Incidunt nam, exercitationem excepturi atque fugiat quod, tempore cumque eos, adipisci quo totam similique delectus?
Nesciunt, quaerat natus, ea aperiam rem repellat voluptas architecto doloribus magni saepe suscipit qui, sunt labore esse. Ratione culpa, fugit quisquam doloribus molestiae voluptas officiis aut repellendus labore, similique voluptatum?
Sint quisquam ducimus aspernatur temporibus libero sit eligendi nobis labore dicta, sunt voluptates ea quae vel facilis? Quo tempore neque necessitatibus recusandae itaque. Excepturi ipsa, amet quam consequatur omnis quae?
Dolorum voluptas dicta, aliquid aperiam rerum doloremque officiis quae dolor tempore ullam repellendus sapiente deserunt quos itaque voluptatem possimus nulla explicabo quasi consequatur, animi, molestias odit incidunt aliquam debitis. Aut!
Est, earum cupiditate dolorum aliquid quos eius illo? Velit atque vel provident, ducimus quasi laudantium magni voluptatibus expedita pariatur officia. Adipisci facilis autem magni cum molestiae eum tenetur veniam sit?
Magnam perspiciatis odit est corrupti eligendi possimus, labore enim quasi, qui commodi debitis aut! Sed ad voluptate corporis ducimus nostrum aspernatur, porro molestias omnis debitis ipsa quia? Numquam, error provident.
Quod veritatis sapiente iure perspiciatis suscipit expedita? Reprehenderit excepturi reiciendis temporibus deserunt tenetur recusandae nam accusantium, quibusdam qui! In magni dolorum doloremque? Fuga, cumque saepe cupiditate laboriosam dicta amet maiores?
Hic, amet sint ullam, non magnam repellat totam nostrum corrupti delectus quidem, debitis ab nobis nisi? Corporis consectetur omnis ullam voluptates harum praesentium quod, provident quae corrupti molestias ab culpa.
Beatae repellat, quam accusamus, voluptatem recusandae aspernatur reiciendis illo praesentium hic dolor amet veritatis architecto non facilis soluta quia odit magni iure rem officiis itaque et accusantium consectetur atque. Quia?
Enim facilis rerum obcaecati dolorum minima. Aspernatur, mollitia sed facere dolorum hic, consectetur assumenda perferendis dignissimos quas explicabo a, dolores suscipit! Nostrum commodi culpa quo nemo a, debitis sint nesciunt.
Omnis eveniet reprehenderit unde reiciendis suscipit iste labore vero officia quisquam, corporis pariatur illo recusandae aliquid neque cum consequuntur explicabo! Praesentium vel sit magnam assumenda perferendis. Eius ex impedit eaque.
Rem aspernatur omnis natus porro aperiam quasi? Vitae nam nobis aliquid sit, adipisci, consectetur a qui voluptatem iure nostrum itaque deserunt! Sit quod natus laudantium! Ipsum optio ipsam molestias et?
Ea saepe hic velit quod delectus necessitatibus earum unde modi eaque, sapiente exercitationem placeat quos. Corporis, officia voluptatibus ut nobis voluptatem, mollitia quasi dolor dolorum facere magnam perferendis esse illum.
Velit aperiam, totam hic nobis, et quae, obcaecati est expedita ducimus neque molestiae quam fuga quaerat. Distinctio officia repellendus nulla dicta quae at, dolore rerum amet! Minus quae eum laudantium.
Nisi laudantium voluptate harum veniam neque minima pariatur dolorem mollitia! Ipsum modi illum aliquid voluptates praesentium in totam laudantium, facere non vero magni odio maxime adipisci ut ipsam omnis quas.
Non sapiente tempore nulla a, laboriosam adipisci eveniet vel neque reiciendis, consequuntur modi illum dolores quis cum. Facere rem alias eos repudiandae nostrum, inventore est placeat! Sed blanditiis consequuntur veritatis?
Rerum perspiciatis rem praesentium corrupti earum natus est ipsam deleniti similique odio commodi harum delectus quos impedit reprehenderit dolor quia quasi iusto quis qui, eveniet ab ad perferendis! Recusandae, earum.
Reiciendis harum odit, ipsum corrupti aliquam provident eum earum laboriosam laudantium maiores, sit natus facilis voluptas cumque officiis vel in adipisci dignissimos facere inventore ducimus perspiciatis! Laboriosam alias consequatur laudantium!
Laudantium qui voluptas quis a recusandae quidem sit quos possimus odit, exercitationem distinctio delectus voluptates explicabo autem et neque tempore impedit, quae, fugiat unde optio illum debitis minus? Assumenda, laboriosam!`

// Create file
// Synchronously create
// fs.writeFileSync('temp.txt', data + '\n File Created ' + new Date().getUTCMilliseconds());
// console.log('File is created ', new Date().getUTCMilliseconds());

// Asynchronously create
fs.writeFile('temp.txt', data + '\n File Created '+ new Date().getUTCMilliseconds(), function(){
    console.log('Inside the callback function ' + new Date().getUTCMilliseconds());
})
console.log('Outside the callback function ' + new Date().getUTCMilliseconds());

// Read file
