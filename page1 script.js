// Get the modal and close button elements
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Workshop data for Map 1
const workshops = {
    "workshop4": {
        title: "كلية التربية للطفولة المبكرة",
        description: "ورشة عمل: علم الفلك والتحنيط عند قدماء المصريين عن طريق صنع متحف افتراضي ومسرح وسرد قصة",
        age: "مرحلة رباض أطفال",
        time: "45 دقيقة"
    },
    "workshop5": {
        title: "مؤسسة العقل الذكي",
        description: "عرض تقديمي: تعامد الشمس على رمسيس عن طريق استخدام مجسم ومعبد أبو سمبل والفلك والهندسة والفن الخاصة بهم",
        age: "مرحلة رياض أطفال",
        time: "15 دقيقة"
    },
    "workshop6": {
        title: "شباب بيحب الخير",
        description: "عرض تقديمي: رحلة إلى مقبرة توت عنخ آمون في مصر القديمة والتي تتناول محتويات المقبرة من فخار وكأس أمنيات وقناع توت عنخ آمون والألوان الخاصة بالمقبرة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop7": {
        title: "جمعية سيدات برج العرب",
        description: "ورشة عمل: صناعة الخوص والفخار والصناعات الحربية والجسور المتحركة بالأوردوينو",
        age: "مرحلة رياض أطفال - المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop8": {
        title: "المراكز الاستكشافية للعلوم والتكنولوجيا، فرع القصر",
        description: "ورشة عمل: الزراعة والبذور والفرق بين الصومعة قديمًا وحديثًا، مع التعرف أدوات الزراعة وإظهار كيف كان قدماء المصريون يستخدمون الحيوانات في الزراعة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop9": {
        title: "مكتبة النشء، مكتبة الإسكندرية",
        description: "ورشة عمل: الأصباغ الطبيعية المستخدمة عند قدماء المصريين وكيف تطورت حاليًّا وتم إضافة ألوان جديدة",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop10": {
        title: "مكتبة الطفل، مكتبة الإسكندرية",
        description: "ورشة عمل: الكتابة وصناعة الورق والأحبار والألوان في مصر القديمة بالإضافة إلى التطرق للكاتب المصري ودور الكتابة في نشر الحضارة المصرية القديمة حتى أنشئ علم المصريات",
        age: "مرحلة الابتدائية",
        time: "45 دقيقة"
    },
    "workshop11": {
        title: "مدرسة سيتي الدولية",
        description: "عرض تقديمي: سفن الفراعنة، إبداع الهندسة وأسرار التصميم، المواد المستخدمة لبناء السفن من خشب واقمشة وكيفية تطور البناء وأنواع السفن",
        age: "المرحلة الابتدائية - المرحلة العدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop12": {
        title: "منفذ بيع، مكتبة الإسكندرية",
        description: "مجموعة متنوعة معروضة للبيع للجمهور من مصنوعات يدوية مصرية، إصدارات لدور نشر محلية وعالمية وهدايا تذكارية",
        age: "جميع الفئات العمرية",
        },
    "workshop13": {
        title: "مركز دراسات الخطوط، مكتبة الإسكندرية",
        description: "عرض تقديمي: الكتابة الهيروغليفية القديمة",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop14": {
        title: "أكاديمية الترويح العلاجي والتعلم المرح",
        description: "عرض تقديمي: الألوان كإحدى الطرق التي استُخدمت من قبل الحضارات القديمة للتعبير عن المعتقدات والرموز الدينية والاجتماعية والبيئية",
        age: "ذوي الهمم",
        time: "45 دقيقة"
    },
    "workshop15": {
        title: "المكتبات المتخصصة، مكتبة الإسكندرية",
        description: "عرض تقديمي: تشييد الأهرامات وصناعة الأحبار",
        age: "ذوي الهمم",
        time: "15 دقيقة"
    }
};

// Function to open the modal with specific workshop data
function openModal(workshop) {
    document.getElementById('workshop-title').textContent = workshops[workshop].title;
    document.getElementById('workshop-description').textContent = workshops[workshop].description;
    document.getElementById('workshop-age').textContent = workshops[workshop].age;
    document.getElementById('workshop-time').textContent = workshops[workshop].time;
    modal.style.display = 'block';
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('.popup-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const workshop = button.getAttribute('data-workshop');
        openModal(workshop);
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});