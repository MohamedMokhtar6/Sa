import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Navs from '../../Components/NavBar/Navs'
import book1 from '../../Images/book1.jpg'
import book4 from '../../Images/book4.png'
import book5 from '../../Images/book5.jpg'
import book6 from '../../Images/book6.jpg'
import book7 from '../../Images/book7.jpg'
import book8 from '../../Images/book8.jpg'
import book9 from '../../Images/book9.jpg'
import book10 from '../../Images/book10.jpg'
import book11 from '../../Images/book11.jpg'
import book12 from '../../Images/book12.jpg'
import book13 from '../../Images/book13.jpg'
import book14 from '../../Images/book14.jpg'
import book15 from '../../Images/book15.jpg'
import book2 from '../../Images/book2.png'
import book3 from '../../Images/book3.png'
import notify from '../../Components/util/useNoti';
import { ToastContainer } from 'react-toastify';



function BookDetailsPage() {
    const parm = useParams();
    const replaced = parm.id.match(/\d+/);
    let id;
    if (replaced !== null) {
        id = Number(replaced[0]);
    }
    const books = [
        { name: 'Room 207', rate: '4', img: book1, Author: 'Ahmed Khaled Tawfik', Category: 'Horror novels', description: 'The book is about the horror of closed rooms around which suspicions and stories that include everything that reaches human imagination from these stories... Dr. Ahmed does not talk about any room except for (Room 207)' },
        { name: 'Great Houses of London', rate: '4.5', img: book2, Author: 'James Stourton', Category: 'Art', description: 'Discover the stories of some of the most breathaking and historic great houses of London, along with their secrets, in this lavishly illustrated compedium.London has a wealth of truly stunning great houses, seen by many as one of the marvels of English architecture, and yet to many their histories, their interiors and their occupants remain unknown.This book, illustrated throughout with sumptuous photography of these breathaking residences, reveals to us this secret world of riches and splendour.From the baroque and imposing magnificence of 10 Downing Street, perhaps London’s most famous address, to the extraordinary Pre- Raphaelite mosaics of Debenham House to the confident, futuristic steel and glass of the Richard Rogers House in Chelsea, this book showcases these properties and details their origin as well as the many transformations they have undergone from their construction to the present day.' },
        { name: 'Steve Jobs The Man Who Thought Different', rate: '4.4', img: book3, Author: 'Karen Blumenthal', Category: 'Documentary', description: '(2012) Inventor. Visionary. Genius. Dropout. Adopted. Steve Jobs was the founder of Apple and he was all of these things. Steve Jobs has been described as a showman, artist, tyrant, genius, jerk. Through his life he was loved, hated, admired and dismissed, yet he was a living legend; the genius who founded Apple in his parent’s garage when he was just 21 years-old, revolutionising the music world. He single-handedly introduced the first computer that could sit on your desk and founded and nurtured a company called Pixar bringing to life Oscar wining animations Toy Story and Finding Nemo. So how did the man, who was neither engineer nor computer geek change the world we live in, making us want every product he touched? On graduation day in 2005, a fifty-year-old Steve Jobs said: ‘Today I want to tell you three stories from my life, That’s it. Just three stories’. The first story is about connecting the dots. My second story is about love and loss. My third story is about death. This is his story… Critically acclaimed author Karen Blumenthal takes us to the core of this complicated and legendary man, from his adoption and early years through to the pinnacles of his career, his dismissal from his duties at Apple (for being too disruptive and difficult) to the graduation where he gave the commencement speech just 6 years before his death, giving life to what were soon to become some of most famous quotes of his career, ending with the message: “Stay Hungry. Stay Foolish. And I have always wished that for myself. And now, as you graduate to begin anew, I wish that for you.' },
        { name: 'Working Backward', rate: '4', img: book4, Author: 'Colin Bryar & Bill Carr', Category: 'Business', description: 'Essential for any leader in any industry’ – Kim Scott, bestselling author of Radical Candor Working Backwards gives an insider’s account of Amazon’s approach to culture, leadership and best practices from two long-time, top-level Amazon executives. Colin Bryar and Bill Carr joined Amazon in the late 90s. Their time at the company covered a period of unmatched innovation that brought products and services – including Kindle, Amazon Prime, Amazon Echo and Alexa, and Amazon Web Services – to life. Through the story of these innovations they reveal the principles and practices that drive Amazon’s success. Through their wealth of experience they offer unprecedented access to the ‘Amazon way’ as it was refined, articulated and proven to be repeatable, scalable and adaptable. Working Backwards shows how success is not achieved by the genius of any single leader, but rather through commitment to and execution of a set of well-defined, rigorously executed principles and practices that you can apply at your own company, no matter the size. ‘Working Backwards should be read by anyone interested in the real thing – the principles, processes and practices of twenty-first-century management and leadership’ – Forbes ‘Gives us the story as it developed at the time – and that is probably worth the cover price of the book in itself’ – Financial Times' },
        { name: 'Rich Table', rate: '3.8', img: book5, Author: 'Sarah Rich, Evan Rich, Carolyn', Category: 'Cookery', description: 'From Sarah and Evan Rich, chef-proprietors of Michelin-starred Rich Table—one of San Francisco’s most coveted reservations—this debut cookbook offers recipes from the restaurant as well as the meals the Riches cook for friends and family at home. Evan and Sarah Rich execute casual Californian fare with fine-dining precision, interweaving the pair’s hometown influences (New Jersey and Louisiana) and a bevy of global influences along the way.' },
        { name: 'Ancient Egypt An Artists Colo', rate: '4.8', img: book6, Author: 'Navarro, Dominique', Category: 'Colouring Books', description: 'Embark on a colorful journey to reveal a hidden Egypt! Explore Egyptian gods, animals, hieroglyphs, designs, and more as you color the elaborate artwork, revealing vibrant details while learning unusual Egyptology facts and coloring tips along the way. Learn about ancient Egypt color theory, including the history of primary colors in the Egyptian palette, their meaning and symbolism, to inspire your own artistic coloring choices. Use your imagination to color, or follow the suggestions accompanying each art panel, including techniques for adding texture, shading, and depth to your artwork. Ancient Egypt is filled with beautifully detailed, inspiring artwork and designs to color, frame, and display in your home. Transform and personalize the black-and-white line drawings into your own unique and colorful art. Appealing to all ages, ideal for adults to unwind and relax, and fun to share with the whole family.' },
        { name: 'Women in ancient Egypt', rate: '4.7', img: book7, Author: 'Mariam F. Ayad', Category: 'Ancient', description: 'Cutting-edge research by twenty-four international scholars on female power, agency, health, and literacy in ancient Egypt There has been considerable scholarship in the last fifty years on the role of ancient Egyptian women in society. With their ability to work outside the home, inherit and dispense of property, initiate divorce, testify in court, and serve in local government, Egyptian women exercised more legal rights and economic independence than their counterparts throughout antiquity. Yet, their agency and autonomy are often downplayed, undermined, or outright ignored. In Women in Ancient Egypt twenty-four international scholars offer a corrective to this view by presenting the latest cutting-edge research on women and gender in ancient Egypt.' },
        { name: 'BKS Iyengar Yoga The Path to H', rate: '3.2', img: book8, Author: 'B.K.S. Iyengar', Category: 'Health', description: '(2014) BKS Iyengar Yoga:The Path to Holistic Health makes Iyengar Yoga accessible to all, while celebrating the life and work of the world renowned B.K.S Iyengar. B.K.S Iyengar is a world leading authority on hatha yoga and is globally respected for his holistic approach and technical accuracy. He has been practicing yoga every day for over 75 years and at 94 is surely proof of holistic health. This is the only yoga book featuring full colour step-by-step photographs of yoga poses demonstrating Iyengar Yoga and this new edition also includes a new chapter celebrating B.K.S Iyengar’s life and work. Over 60 step-by-step sequences of asanas, pranayamas and chakras were supervised by B.K.S Iyengar himself and over 20 include unique 360 degree images of classNameic Iyengar asanas, it’s like having a yoga className with your own personal yogi. Yoga is made accessible to everyone with a special 20-week yoga course for beginners to yoga sequences specifically designed to treat over 80 ailments, from asthma and arthritis to varicose veins. BKS Iyengar Yoga:The Path to Holistic Health (previous ISBN 9781405322355) is suitable for every age and ability, allowing everyone to enjoy the benefits to mind, body and spirit that are drawn from Iyengar Yoga.' },
        { name: 'Skincare ', rate: '4.6', img: book9, Author: 'Caroline Hirons', Category: 'Health', description: 'Caroline Hirons is the authority in skincare – and for the first time, she’s sharing her knowledge with the world. With over 100 million views of her blog and over 13 million views of her YouTube videos, she cuts out the jargon, tells you what you do and don’t need, and is finally going to get the nation off face wipes for good! Skincare is the go-to book for people of all ages and skin types who want to feel and look fantastic. It explains the facts, the myths and the best way to get good skin – on any budget. With everything from Caroline’s signature cheat sheets, simple tips and tricks to glow (inside and out!) understanding ingredients lists, and advice on how to choose the products that are right for you, this is the ultimate guide to healthier, brighter skin.' },
        { name: 'The Spy And The Traitor', rate: '4.1', img: book10, Author: 'Ben Macintyre', Category: 'History', description: 'If anyone could be considered a Russian counterpart to the infamous British double-agent Kim Philby, it was Oleg Gordievsky. The son of two KGB agents and the product of the best Soviet institutions, the savvy, sophisticated Gordievsky grew to see his nation’s communism as both criminal and philistine. He took his first posting for Russian intelligence in 1968 and eventually became the Soviet Union’s top man in London, but from 1973 on he was secretly working for MI6. For nearly a decade, as the Cold War reached its twilight, Gordievsky helped the West turn the tables on the KGB, exposing Russian spies and helping to foil countless intelligence plots, as the Soviet leadership grew increasingly paranoid at the United States’s nuclear first-strike capabilities and brought the world closer to the brink of war. Desperate to keep the circle of trust close, MI6 never revealed Gordievsky’s name to its counterparts in the CIA, which in turn grew obsessed with figuring out the identity of Britain’s obviously top-level source. Their obsession ultimately doomed Gordievsky: the CIA officer assigned to identify him was none other than Aldrich Ames, the man who would become infamous for secretly spying for the Soviets.' },
        { name: 'The Gates Of Europe', rate: '4.4', img: book11, Author: 'Robin Roberts', Category: 'History', description: 'As Ukraine is embroiled in an ongoing struggle with Russia to preserve its territorial integrity and political independence, celebrated historian Serhii Plokhy explains that today’s crisis is a case of history repeating itself: the Ukrainian conflict is only the latest in a long history of turmoil over Ukraine’s sovereignty. Situated between Central Europe, Russia, and the Middle East, Ukraine has been shaped by empires that exploited the nation as a strategic gateway between East and West—from the Romans and Ottomans to the Third Reich and the Soviet Union. In The Gates of Europe, Plokhy examines Ukraine’s search for its identity through the lives of major Ukrainian historical figures, from its heroes to its conquerors.' },
        { name: 'Robin Wood Tarot', rate: '4.9', img: book12, Author: 'Robin Wood', Category: 'New Age', description: 'The Robin Wood Tarot has rapidly become one of the most popular Tarot decks in the world. Its beautiful art, vibrant imagery and luminous energies, enchants everyone. The 22 Major Arcana cards are filled with life that was previously unseen in the Tarot. It is also filled with the energy of nature, taking the images outside of rooms and into the beautiful abodes of the gods. For example, The High Priestess is an ageless woman wearing a lunar headband. Behind her are trees and a darkened sky lit only by the moon.' },
        { name: 'IELTS Advantage Speaking and', rate: '4.2', img: book13, Author: 'Jonathan Marks', Category: 'Education', description: '' },
        { name: 'Writing Arabic', rate: '4.3', img: book14, Author: 'Stefan Moginet', Category: 'Study Guides', description: '2010 A history of the formation of Arabic letters from the earliest styles to modern computer fonts This book, abundantly illustrated with examples of Arabic handwriting, calligraphy, and typography, clearly presents the development of Arabic writing styles, from the beginning with reed pens to twenty-first century computerized typesetting. The author explains the importance of writing instruments and the surfaces onto which letters are inscribed, including the particular challenges introduced with the innovation of the printing press, and later the computer. Arabic Writing will interest not only those interested in the extraordinary history of writing, but also graphic designers, calligraphers, and visual artists, enabling an understanding of the development of existing styles, and providing a foundation from which new logotypes and character fonts can be designed.' },
        { name: 'On the Nile in the Golden Age', rate: '2.1', img: book15, Author: 'Andrew Humphreys', Category: 'Travel', description: 'Since Antony and Cleopatra honeymooned on the Nile on a gilded barge, visitors to Egypt have taken to the river as the best way to experience the country’s wonders. Early travelers took a dahabiya, an elegant triangular-sailed houseboat, and leisurely meandered from riverside site to site, for three months or more. Then from the late nineteenth century, Thomas Cook of Leicester, England, revolutionized the journey with a fleet of specially built paddle steamers. For the next sixty years these ‘floating palaces,’ with their private cabins, and dining, smoking, and viewing salons, red-uniformed dragoman guides, and organized donkey excursions, carried the aristocratic, moneyed, and adventurous of international society of the time.Using period photography, and colorful vintage posters and advertising material, this book tells the story of the people, the places, and the boats, from pioneering Nile travelers like Amelia Edwards and Lucie Duff Gordon, through to famed later passengers, such as Rudyard Kipling, Arthur Conan Doyle, and, of course, Agatha Christie, whose staging of a death on the Nile only added to the allure.' },

    ]
    var book = []
    for (var i = 0; i <= books.length; i++) {
        if (id === i + 1) {
            book = books[i]
        }
    }

    return (
        <>
            <Navs />
            <Container className=' p-3 bookdet my-5 ' style={{ minHeight: '76vh' }} >
                <Row>
                    <Col xs='4'>
                        <img src={book.img} alt='name' />
                    </Col>
                    <Col xs='8' className='d-flex flex-column justify-content-center p-0 '>
                        <h1 className='fw-bold m-1'>{book.name}</h1>
                        <span className='d-block  m-1'>Author: {book.Author}</span>
                        <span className='d-block  m-1'>Category: {book.Category}</span>
                        <span className='d-block  m-1'>Rating: {book.rate} <i className="fa-solid fa-star gold"></i></span>
                        <p className=' m-1'>{book.description}</p>
                        <Button className='fit bg-main text-main border-0 my-2' onClick={(e) => {
                            notify("Request Sent Successfully", 'Success'); e.target.disabled = 'true'; e.target.innerHTML = 'Done☑'
                        }}>Request This Book</Button>
                    </Col>
                    <ToastContainer />
                </Row>
            </Container>
        </>
    )
}

export default BookDetailsPage