##magnetisation vs time py doc

import nmag
from nmag import SI, at

#create a simulation object
sim = nmag.Simulation()

#define magnetic material
matd_Py = nmag.MagMaterial(name="Py", Ms=SI(0.86e6, "A/m"), exchange_coupling=SI(13.0e-12, "J/m"), llg_damping=0.5)

#load mesh: the mesh dimensions are scaled by 100nm
sim.load_mesh("bar30_30_100.nmesh.h5", [("Py", mat_Py)], unit_length=SI(1e-9, "m"))

#set initial magnetisation
sim.set_m([1,0,1])

#dynamic process, compute the time development over certain amount of time.
dt = SI(5e-12, "s")

#for loop in which "i" will take values for subsequent iterations.
#compute time development
for i in range(0,61):       
    sim.advance_time(dt*i)

#every 10 loop iterations, save avg and all 
    if i % 10 == 0:
        sim.save_data(fields="all")

 #otherwise save avg.       
        else:
            sim.save_data()


