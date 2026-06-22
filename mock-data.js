
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
  totalStaff: MOCK_USERS.filter(u => u.role === 'Admin').length,
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