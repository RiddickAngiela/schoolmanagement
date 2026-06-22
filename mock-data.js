// ============================================================
//  mock-data.js  —  Shared data for School Management System
//  Include this file in any page that needs application data:
//  <script src="mock-data.js"></script>
// ============================================================

const MOCK_USERS = [
  { id: 1,  name: 'Amara Osei',        email: 'amara.osei@school.edu',       role: 'Student', group: 'Grade 10A',      status: 'Active',    joined: 'Jan 2024', phone: '+254 700 111 001', dob: '2009-03-12' },
  { id: 2,  name: 'David Kimani',       email: 'd.kimani@school.edu',         role: 'Teacher', group: 'Mathematics',    status: 'Active',    joined: 'Aug 2022', phone: '+254 700 111 002', dob: '1985-07-22' },
  { id: 3,  name: 'Fatima Al-Hassan',   email: 'fatima.h@school.edu',         role: 'Student', group: 'Grade 8B',       status: 'Active',    joined: 'Jan 2024', phone: '+254 700 111 003', dob: '2011-01-05' },
  { id: 4,  name: 'Mr. James Otieno',   email: 'j.otieno@school.edu',         role: 'Admin',   group: 'Administration', status: 'Active',    joined: 'Mar 2020', phone: '+254 700 111 004', dob: '1978-11-30' },
  { id: 5,  name: 'Lily Wanjiku',       email: 'lily.w@school.edu',           role: 'Student', group: 'Grade 11C',      status: 'Inactive',  joined: 'Jan 2023', phone: '+254 700 111 005', dob: '2008-06-14' },
  { id: 6,  name: 'Ms. Grace Mwangi',   email: 'g.mwangi@school.edu',         role: 'Teacher', group: 'Science',        status: 'Active',    joined: 'Jan 2021', phone: '+254 700 111 006', dob: '1990-09-18' },
  { id: 7,  name: 'Peter Ndungu',       email: 'p.ndungu@parent.school.edu',  role: 'Parent',  group: 'Grade 10A',      status: 'Active',    joined: 'Feb 2024', phone: '+254 700 111 007', dob: '1975-04-02' },
  { id: 8,  name: 'Sofia Abiodun',      email: 'sofia.a@school.edu',          role: 'Student', group: 'Grade 9D',       status: 'Active',    joined: 'Jan 2024', phone: '+254 700 111 008', dob: '2010-08-27' },
  { id: 9,  name: 'Mr. Samuel Bett',    email: 's.bett@school.edu',           role: 'Teacher', group: 'English Lit.',   status: 'Suspended', joined: 'Aug 2019', phone: '+254 700 111 009', dob: '1982-12-09' },
  { id: 10, name: 'Zawadi Chebet',      email: 'zawadi.c@school.edu',         role: 'Student', group: 'Grade 7A',       status: 'Active',    joined: 'Jan 2025', phone: '+254 700 111 010', dob: '2013-03-14' },
  { id: 11, name: 'Brian Omondi',       email: 'b.omondi@school.edu',         role: 'Student', group: 'Grade 9B',       status: 'Active',    joined: 'Jan 2024', phone: '+254 700 111 011', dob: '2010-05-19' },
  { id: 12, name: 'Ms. Alice Njeri',    email: 'a.njeri@school.edu',          role: 'Teacher', group: 'History',        status: 'Active',    joined: 'Aug 2023', phone: '+254 700 111 012', dob: '1988-02-23' },
  { id: 13, name: 'Cynthia Aoko',       email: 'c.aoko@school.edu',           role: 'Student', group: 'Grade 8A',       status: 'Active',    joined: 'Jan 2024', phone: '+254 700 111 013', dob: '2011-10-11' },
  { id: 14, name: 'Daniel Mwenda',      email: 'd.mwenda@parent.school.edu',  role: 'Parent',  group: 'Grade 8B',       status: 'Active',    joined: 'Jan 2024', phone: '+254 700 111 014', dob: '1979-07-07' },
  { id: 15, name: 'Esther Kamau',       email: 'e.kamau@school.edu',          role: 'Student', group: 'Grade 10B',      status: 'Inactive',  joined: 'Jan 2023', phone: '+254 700 111 015', dob: '2009-12-30' },
];

const MOCK_STATS = {
  students:   MOCK_USERS.filter(u => u.role === 'Student').length,
  teachers:   MOCK_USERS.filter(u => u.role === 'Teacher').length,
  admins:     MOCK_USERS.filter(u => u.role === 'Admin').length,
  parents:    MOCK_USERS.filter(u => u.role === 'Parent').length,
  totalStaff: MOCK_USERS.filter(u => u.role === 'Teacher' || u.role === 'Admin').length,
};

const MOCK_INVOICES = [
  { student: 'Amara Osei',      class: 'Grade 10A', title: 'Term 2 Fees',    total: 45000, paid: 45000 },
  { student: 'Fatima Al-Hassan',class: 'Grade 8B',  title: 'Term 2 Fees',    total: 42000, paid: 30000 },
  { student: 'Lily Wanjiku',    class: 'Grade 11C', title: 'Term 2 Fees',    total: 47000, paid: 47000 },
  { student: 'Sofia Abiodun',   class: 'Grade 9D',  title: 'Activity Levy',  total: 5000,  paid: 0     },
  { student: 'Zawadi Chebet',   class: 'Grade 7A',  title: 'Term 2 Fees',    total: 40000, paid: 20000 },
];

const MOCK_ATTENDANCE = {
  date: new Date().toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  present: 9,
  absent: 2,
  total: 11,
};

const MOCK_ALUMNI = [
  { id: 1,  name: 'Kevin Mwangi',      email: 'kevin.mwangi@gmail.com',      gradYear: 2020, program: 'Science',          status: 'Employed',    occupation: 'Software Engineer',      employer: 'Safaricom PLC',         phone: '+254 711 200 001', location: 'Nairobi' },
  { id: 2,  name: 'Sharon Atieno',     email: 'sharon.atieno@gmail.com',     gradYear: 2021, program: 'Arts',             status: 'Studying',    occupation: 'BSc Computer Science',   employer: 'University of Nairobi', phone: '+254 711 200 002', location: 'Nairobi' },
  { id: 3,  name: 'Felix Kariuki',     email: 'felix.kariuki@outlook.com',   gradYear: 2019, program: 'Commerce',         status: 'Employed',    occupation: 'Accountant',             employer: 'KCB Bank Kenya',        phone: '+254 711 200 003', location: 'Mombasa' },
  { id: 4,  name: 'Brenda Onyango',    email: 'brenda.onyango@gmail.com',    gradYear: 2022, program: 'Science',          status: 'Studying',    occupation: 'MBChB Medicine',         employer: 'Kenyatta University',   phone: '+254 711 200 004', location: 'Nairobi' },
  { id: 5,  name: 'Victor Kipchoge',   email: 'victor.kipchoge@gmail.com',   gradYear: 2018, program: 'Technical',        status: 'Self-employed', occupation: 'Electrician',          employer: 'VK Solutions',          phone: '+254 711 200 005', location: 'Eldoret' },
  { id: 6,  name: 'Nancy Wambui',      email: 'nancy.wambui@yahoo.com',      gradYear: 2021, program: 'Arts',             status: 'Employed',    occupation: 'Journalist',             employer: 'Nation Media Group',    phone: '+254 711 200 006', location: 'Nairobi' },
  { id: 7,  name: 'George Ochieng',    email: 'george.ochieng@gmail.com',    gradYear: 2020, program: 'Commerce',         status: 'Unemployed',  occupation: '—',                      employer: '—',                     phone: '+254 711 200 007', location: 'Kisumu' },
  { id: 8,  name: 'Patricia Mutua',    email: 'patricia.mutua@gmail.com',    gradYear: 2019, program: 'Science',          status: 'Employed',    occupation: 'Civil Engineer',         employer: 'Kenya Roads Board',     phone: '+254 711 200 008', location: 'Nairobi' },
  { id: 9,  name: 'Samuel Cheruiyot', email: 's.cheruiyot@outlook.com',     gradYear: 2022, program: 'Technical',        status: 'Studying',    occupation: 'Diploma IT',             employer: 'Strathmore University', phone: '+254 711 200 009', location: 'Nakuru' },
  { id: 10, name: 'Diana Achieng',     email: 'diana.achieng@gmail.com',     gradYear: 2018, program: 'Arts',             status: 'Employed',    occupation: 'Graphic Designer',       employer: 'Ogilvy Africa',         phone: '+254 711 200 010', location: 'Nairobi' },
  { id: 11, name: 'Moses Kamotho',     email: 'moses.kamotho@gmail.com',     gradYear: 2023, program: 'Science',          status: 'Studying',    occupation: 'BSc Nursing',            employer: 'Moi University',        phone: '+254 711 200 011', location: 'Eldoret' },
  { id: 12, name: 'Irene Njoki',       email: 'irene.njoki@gmail.com',       gradYear: 2017, program: 'Commerce',         status: 'Employed',    occupation: 'Marketing Manager',      employer: 'Equity Bank',           phone: '+254 711 200 012', location: 'Nairobi' },
  { id: 13, name: 'Alex Otieno',       email: 'alex.otieno@gmail.com',       gradYear: 2023, program: 'Arts',             status: 'Unemployed',  occupation: '—',                      employer: '—',                     phone: '+254 711 200 013', location: 'Kisumu' },
  { id: 14, name: 'Caroline Njeru',    email: 'caroline.njeru@outlook.com',  gradYear: 2016, program: 'Science',          status: 'Employed',    occupation: 'Pharmacist',             employer: 'Aga Khan Hospital',     phone: '+254 711 200 014', location: 'Nairobi' },
  { id: 15, name: 'Dennis Wekesa',     email: 'dennis.wekesa@gmail.com',     gradYear: 2021, program: 'Technical',        status: 'Self-employed', occupation: 'Plumber',              employer: 'DW Services',           phone: '+254 711 200 015', location: 'Kakamega' },
  { id: 16, name: 'Lydia Chebet',      email: 'lydia.chebet@gmail.com',      gradYear: 2020, program: 'Science',          status: 'Employed',    occupation: 'Lab Technician',         employer: 'KEMRI',                 phone: '+254 711 200 016', location: 'Kisumu' },
  { id: 17, name: 'Frank Njoroge',     email: 'frank.njoroge@gmail.com',     gradYear: 2019, program: 'Commerce',         status: 'Employed',    occupation: 'Banker',                 employer: 'Standard Chartered',    phone: '+254 711 200 017', location: 'Nairobi' },
  { id: 18, name: 'Mercy Auma',        email: 'mercy.auma@yahoo.com',        gradYear: 2022, program: 'Arts',             status: 'Studying',    occupation: 'BA Education',           employer: 'Maseno University',     phone: '+254 711 200 018', location: 'Kisumu' },
];

const MOCK_ALUMNI_STATS = {
  total:        MOCK_ALUMNI.length,
  employed:     MOCK_ALUMNI.filter(a => a.status === 'Employed').length,
  studying:     MOCK_ALUMNI.filter(a => a.status === 'Studying').length,
  selfEmployed: MOCK_ALUMNI.filter(a => a.status === 'Self-employed').length,
  unemployed:   MOCK_ALUMNI.filter(a => a.status === 'Unemployed').length,
};